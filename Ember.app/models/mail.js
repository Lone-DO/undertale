Undertale.Mail = DS.Model.extend({
  //Sets up relationship with Fanmail Page
  text: DS.attr(),
  memory: DS.belongsTo('fanmail', {async: true})
});