Undertale.NewMailController = Ember.Controller.extend({
  actions: {
    //Create mail
    save: function () {
      'use strict';
      var newMail = this.store.createRecord('mail', {
        //attaches to {{user}}
        user: this.get('user'),
        //attaches to {{text}}
        text: this.get('text')
      });
      //Save Mail
      newMail.save();
      this.transitionToRoute('mailbox');
    }
  }
});