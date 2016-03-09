Undertale.Mail = DS.Model.extend({
  user: DS.attr(),
  text: DS.attr(),
  //Sets up relationship with Fanmail Page
  mailbox: DS.belongsTo('mailbox', {async: true})
});