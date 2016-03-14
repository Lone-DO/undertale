Undertale.NewMailController = Ember.Controller.extend({
  minText: true,
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
      
      //Disable Save Button
        //Check if User Field is Valid
          //Valid if user.val().length > 3
        //Check if Text Field is Valid
          //Valid if text.val().length > 5
      //If Valid = True.then(Enable Save Button)
      
      //    minText: function () {
        //      'use strict';
        //      if (user.value.length > 3) {
        //        this.set('minText', true);
        //      } else {
        //        this.set('minText', false);
        //      }
        //    }

    },
    entryNotAllowed: function () {
      'use strict';
      console.log('This is invalid');
    }
  }
});