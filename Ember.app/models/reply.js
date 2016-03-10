Undertale.Reply = DS.Model.extend({
  text: DS.attr(),
  //Sets up relationship with Mail
  mail: DS.belongsTo('mail', {async: true})
});