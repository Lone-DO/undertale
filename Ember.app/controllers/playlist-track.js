Undertale.PlaylistTrackController = Ember.ObjectController.extend({
  needs: ['playlist'],
  actions: {
    currentTrack: Ember.computed.alias('controllers.playlist.currentTrack'),

    current: function () {
      return this.get('content') === this.get('currentTrack');
    }.property('content', 'currentTrack')
  }
});