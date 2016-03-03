Undertale.MailboxRoute = Ember.Route.extend({
  model: function () {
    'use strict';
    return letters;
//    //Storage Method
//    return this.store.find('fanmail', params.fanmail_id);
    //local method
//    return letters.findBy('id', params.fanmail_id);
  }
});