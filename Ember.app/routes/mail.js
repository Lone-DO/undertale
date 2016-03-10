Undertale.MailRoute = Ember.Route.extend({
  model: function () {
    'use strict';
    return this.store.findAll('mail');
//    return mailbox.findBy('id');
  }
});