Undertale.Fanmail = DS.Model.extend({
  //Sets up relationship with Mail archive
  letters: DS.hasMany('mail', {async: true})
});