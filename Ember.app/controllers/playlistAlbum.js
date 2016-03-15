Undertale.PlaylistAlbumController = Ember.ObjectController.extend({
  needs: ['playlist'],
  actions: {
    currentAlbum: Ember.computed.alias('controllers.playlist.currentAlbum'),

    current: function () {
      'use strict';
      return this.get('content') === this.get('currentAlbum');
    }.property('content', 'currentAlbum')
  }
});