Undertale.MailRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('mail', parmas.mail_id);
//    return mailbox.findBy('id');
  }
});