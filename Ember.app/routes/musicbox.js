Undertale.MusicboxRoute = Ember.Route.extend({
  redirect: function () {
    this.transitionTo('library');
  }
});