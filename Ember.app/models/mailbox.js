Undertale.Mailbox = DS.Model.extend({
  //Sets up relationship with Mail archive
  mails: DS.hasMany('mail', {async: true})
});