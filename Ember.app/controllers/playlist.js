Undertale.PlaylistController = Ember.ArrayController.extend({
  actions: {
    currentTrack: null,

    prev: function () {
      'use strict';
      this.set('currentTrack', this.get('prevTrack'));
    },

    next: function () {
      'use strict';
      this.set('currentTrack', this.get('nextTrack'));
    },

    prevTrack: function () {
      'use strict';
      var tracks = this.get('tracks'),
        currentIndex = tracks.indexOf(this.get('currentTrack')),
        prevIndex = currentIndex === 0 ? tracks.length - 1 : currentIndex - 1;

      return tracks.objectAt(prevIndex);
    }.property('tracks', 'currentTrack'),

    nextTrack: function () {
      'use strict';
      var tracks = this.get('tracks'),
        currentIndex = tracks.indexOf(this.get('currentTrack')),
        nextIndex = currentIndex === (tracks.length - 1) ? 0 : currentIndex + 1;

      return tracks.objectAt(nextIndex);
    }.property('tracks', 'currentTrack'),

    currentAlbum: function () {
      'use strict';
      return this.get('currentTrack.album');
    }.property('currentTrack'),

    addObject: function (album) {
      'use strict';
      this.get('content').addObject(album);

      if (this.get('content').length === 1) {
        this.set('currentTrack', this.get('tracks.firstObject'));
      }
    },

    removeObject: function (album) {
      'use strict';
      var currentTrack = this.get('currentTrack'),
        containsCurrentTrack = album.tracks.contains(currentTrack);
      this.get('content').removeObject(album);

      if (this.get('content').length === 0) {
        this.set('currentTrack', null);
      } else if (containsCurrentTrack) {
        this.set('currentTrack', this.get('tracks.firstObject'));
      }
    },

    tracks: function () {
      'use strict';
      return this.reduce(function (res, album) {
        return res.concat(album.tracks);
      }, []);
    }.property('content.@each')
  }
});