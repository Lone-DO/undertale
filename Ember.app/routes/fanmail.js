Undertale.FanmailRoute = Ember.Route.extend({
  model: function (params) {
    'use strict';
    //Storage Method
    return this.store.find('fanmail', params.fanmail_id);
    //local method
//    return letters.findBy('id', params.fanmail_id);
  }
});