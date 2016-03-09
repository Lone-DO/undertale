Undertale.NewMailController = Ember.Controller.extend({
  needs: ['mailbox'],
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
//      //Pushes Mail to page/archive
//      var fanmail = this.get('controllers.fanmail.model');
//      fanmail.get('letters').pushObject(mail);
//      fanmail.save();
      //takes user to Fanmail Page after saving New Mail
      this.transitionToRoute('mailbox');
    }
  }
});