Undertale.NewmailController = Ember.Controller.extend({
  actions: {
    needs: ['fanmail'],
    //Create mail
    save: function () {
      'use strict';
      var mail = this.store.createRecord('mail', {
        //attaches to {{text}}
        text: this.get('text')
      });
      //Save Mail
      mail.save();
      //Pushes Mail to page/archive
      var fanmail = this.get('controllers.fanmail.model');
      post.get('letters').pushObject(mail);
      post.save();
      //takes user to Fanmail Page after saving New Mail
      this.transitionToRoute('fanmail', fanmail.id);
    }
  }
});