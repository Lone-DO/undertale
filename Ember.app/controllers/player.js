Undertale.PlayerController = Ember.Controller.extend({
  needs: ['playlist'],
  actions: {
    currentTrack: Ember.computed.alias('controllers.playlist.currentTrack'),

    isPlaying: false,

    init: function () {
      'use strict';
      this._super();

      var audio = new Audio();

      audio.addEventListener('ended', function () {
        this.get('target').send('next');
      }.bind(this));

      this.set('audio', audio);
    },

    play: function () {
      'use strict';
      if (!this.get('currentTrack')) {
        return;
      }

      this.get('audio').play();
      this.set('isPlaying', true);
    },

    pause: function () {
      'use strict';
      this.get('audio').pause();
      this.set('isPlaying', false);
    },

    currentTrackChanged: function () {
      'use strict';
      var new_src = this.get('currentTrack.url');

      this.get('audio').src = new_src;

      if (!new_src) {
        this.pause();
      }

      if (this.get('isPlaying')) {
        this.play();
      }
    }.observes('currentTrack')
  }
});