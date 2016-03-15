Undertale.ApplicationRoute = Ember.Route.extend({
  actions: {
    queueAlbum: function (album) {
      'use strict';
      this.controllerFor('playlist').addObject(album);
    },

    dequeueAlbum: function (album) {
      'use strict';
      this.controllerFor('playlist').removeObject(album);
    }
  }
});