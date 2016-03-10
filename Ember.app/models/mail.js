Undertale.Mail = DS.Model.extend({
  user: DS.attr(),
  text: DS.attr(),
  //Sets up relationship with Mailbox Page
  mailbox: DS.belongsTo('mailbox', {async: true})
//  replies: DS.hasMany('reply', {async: true})
});