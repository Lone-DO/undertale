Undertale.Mail = DS.Model.extend({
  //Sets up relationship with Fanmail Page
  user: DS.attr(),
  text: DS.attr(),
  fanmail: DS.belongsTo('fanmail', {async: true})
});