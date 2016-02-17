this.AudioPlayer = (function() {

    AudioPlayer.States = {
      Ready: 0,
      Playing: 1,
      Loading: 2,
      Error: 3
    };

    function AudioPlayer(options) {
      this.setOptions(options);
    }

    AudioPlayer.prototype.setOptions = function(options) {
      var key, value;
      if (options == null) {
        options = {};
      }
      for (key in options) {
        value = options[key];
        this[key] = value;
      }
      if (options.el) {
        return this.setEl(options.el);
      }
    };

    AudioPlayer.prototype.setEl = function(el) {
      if (this.el) {
        this._unbindEvents();
      }
      this.el = el;
      return this._bindEvents();
    };

  return AudioPlayer;
})();

//Update State

AudioPlayer.prototype.updateState = function(e) {
  var state;

  if(this.isErrored()) {
    state = AudioPlayer.States.Error;
  } else if(this.isLoading()) {
    state = AudioPlayer.States.Loading;
  } else if(this.isPlaying()) {
    state = AudioPlayer.States.Playing;
  } else {
    state = AudioPlayer.States.Ready;
  }

  if (this.state !== state) {
    this.state = state;
    if(this.ui != null) {
      this.ui.AudioPlayerUpdateState(state);
    }
  }
};

//Update Status

AudioPlayer.prototype.isPlaying = function() {
  return this.el && !this.el.paused;
};

AudioPlayer.prototype.isPaused = function() {
  return this.el && this.el.paused;
};

AudioPlayer.prototype.isLoading = function() {
  if (!this.state && this.isEmpty()) {
    return false;
  }
  return this.el.networkState === this.el.NETWORK_LOADING && this.el.readyState < this.el.HAVE_FUTURE_DATA;
};

AudioPlayer.prototype.isErrored = function() {
  return this.el.error || this.el.networkState === this.el.NETWORK_NO_SOURCE;
};

AudioPlayer.prototype.isEmpty = function() {
  return this.el.readyState === this.el.HAVE_NOTHING;
};

AudioPlayer.prototype.duration = function() {
  return this.el.duration;
};

AudioPlayer.prototype.percentComplete = function() {
  var number;
  number = ~~((this.el.currentTime / this.el.duration) * 10000);
  return number / 10000;
};

//Controls

AudioPlayer.prototype.play = function() {
  var _ref;
  if (this.isEmpty()) {
    if ((_ref = this.ui) != null) {
      _ref.AudioPlayerUpdateState(AudioPlayer.States.Loading);
    }
  }
  return this.el.play();
};

AudioPlayer.prototype.pause = function() {
  return this.el.pause();
};

AudioPlayer.prototype.load = function() {
  return this.el.load();
};


AudioPlayer.prototype.seekTo = function(time) {
  return this.el.currentTime = parseInt(time, 10);
};

//Events

AudioPlayer.prototype.handleEvent = function(event) {
  var _ref;
  if (_ref = event.type, __indexOf.call(this.audioPlayerEvents, _ref) >= 0) {
    return this.updateState(event);
  } else if (event.type === "timeupdate") {
    return this._timeUpdate(event);
  }
};

AudioPlayer.prototype._bindEvents = function() {
  var eventName, _i, _len, _ref;
  this.audioPlayerEvents || (this.audioPlayerEvents = ["abort", "error", "play", "playing", "seeked", "pause", "ended", "canplay", "loadstart", "loadeddata", "canplaythrough", "seeking", "stalled", "waiting", "progress"]);
  _ref = this.audioPlayerEvents;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    eventName = _ref[_i];
    this.el.addEventListener(eventName, this);
  }
  return this.el.addEventListener("timeupdate", this);
};

AudioPlayer.prototype._unbindEvents = function() {
  var eventName, _i, _len, _ref;
  _ref = this.audioPlayerEvents;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    eventName = _ref[_i];
    this.el.removeEventListener(eventName, this);
  }
  return this.el.removeEventListener("timeupdate", this);
};

AudioPlayer.prototype._timeUpdate = function(e) {
  var _ref;
  if (!this.isLoading()) {
    return (_ref = this.ui) != null ? typeof _ref.AudioPlayerTimeUpdated === "function" ? _ref.AudioPlayerTimeUpdated(this.percentComplete()) : void 0 : void 0;
  }
};