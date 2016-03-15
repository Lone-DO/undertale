Undertale.MusicboxRoute = Ember.Route.extend({
  redirect: function () {
    'use strict';
    this.transitionTo('library');
  }
});