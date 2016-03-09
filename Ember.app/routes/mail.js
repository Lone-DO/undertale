Undertale.MailRoute = Ember.Route.extend({
  model: function () {
    'use strict';
    return this.store.find('mail');
//    return mailbox.findBy('id');
  }
});