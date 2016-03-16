Undertale.NewMailController = Ember.Controller.extend({
  actions: {
    save: function () {
      'use strict';
      var newMail = this.store.createRecord('mail', {
          user: this.get('user'),
          text: this.get('text')
        });
      newMail.save();
      this.transitionToRoute('mailbox');
    }
  }
});

////_________   Junk/ Beta Features    _________\\
  
    //Disable Save Button
        //Check if User Field is Valid
          //Valid if user.val().length > 3
        //Check if Text Field is Valid
          //Valid if text.val().length > 10
      //If Valid = True.then(Enable Save Button)
      
      //    minText: function () {
        //      'use strict';
        //      if (user.value.length > 3) {
        //        this.set('minText', true);
        //      } else {
        //        this.set('minText', false);
        //      }
        //    }

////_________   JQUERY    _________\\
////Problem: Hints are shown even when form is valid
////Solution: Hide and show them at appropriate times
//var $user = $('#user');
//var $text = $('#text');
//
////Hide hints
//$("#span").hide();
//
//function isUserValid() {
//  'use strict';
//  return $('#user').val.length > 3;
//}
//
//function isTextValid() {
//  'use strict';
//  return $('#text').val.length > 10;
//}
//
//function canSave() {
//  'use strict';
//  return isTextValid() && isUserValid();
//}
//
//function userEvent() {
//  'use strict';
//    //Find out if password is valid  
//  if (isUserValid()) {
//    //Hide hint if valid
//    $user.next().hide();
//  } else {
//    //else show hint
//    $user.next().show();
//  }
//}
//
//function textEvent() {
//  'use strict';
//    //Find out if password is valid  
//  if (isTextValid()) {
//    //Hide hint if valid
//    $text.next().hide();
//  } else {
//    //else show hint
//    $text.next().show();
//  }
//}
//
//function enableSaveEvent() {
//  'use strict';
//  $("#save").prop("disabled", !canSave());
//}
//
////When event happens on User input
//$user.focus(userEvent).keyup(userEvent).keyup(textEvent).keyup(enableSaveEvent);
//
////When event happens on Text input
//$text.focus(textEvent).keyup(textEvent).keyup(enableSaveEvent);
//
//enableSaveEvent();
//console.log('Function is running');