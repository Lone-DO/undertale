Undertale.ApplicationRoute = Ember.Route.extend({
  actions: {
    queueAlbum: function (album) {
      this.controllerFor('playlist').addObject(album);
    },

    dequeueAlbum: function (album) {
      this.controllerFor('playlist').removeObject(album);
    }
  }
});