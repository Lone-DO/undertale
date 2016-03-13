Undertale.NewMailController = Ember.Controller.extend({
  actions: {
    //Create mail
    save: function () {
      'use strict';
//      var $userReady = this.user.val().length,
//        $textReady = this.text.val().length,
        var newMail = this.store.createRecord('mail', {
          //attaches to {{user}}
          user: this.get('user'),
          //attaches to {{text}}
          text: this.get('text')
        });
//      function onchange() {
//        if ($userReady > 3) {
//          console.log("active");
//        } else {
//          console.log("disabled");
//        }
//      }
      //Disable Save Button
        //Check if User Field is Valid
          //Valid if user.val().length > 3
        //Check if Text Field is Valid
          //Valid if text.val().length > 5
      //If Valid = True.then(Enable Save Button)
      
      //Save Mail
      newMail.save();
      this.transitionToRoute('mailbox');
    }
  }
});