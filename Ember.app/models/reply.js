Undertale.Reply = DS.Model.extend({
  //Sets up relationship with Memory
  text: DS.attr(),
  mail: DS.belongsTo('mail', {async: true})
});