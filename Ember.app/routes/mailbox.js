Undertale.MailboxRoute = Ember.Route.extend({
  model: function () {
    'use strict';
    return this.store.findAll('mail');
  }
});