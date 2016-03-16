Undertale.ApplicationController = Ember.ObjectController.extend({
  navShowing: true,
  actions: {
  //Reply Reveal and Conceal
    navHide: function () {
      'use strict';
      this.set('navShowing', false);
    }
  }
});