Undertale.NewReplyController = Ember.Controller.extend({
  actions: {
    needs: ['mail'],
    save: function () {
      'use strict';
      var reply = this.store.createRecord('reply', {
        text: this.get('text')
      });
      reply.save();
      
      var mail = this.get('controllers.mail.model');
      mail.get('replies').pushObject(reply);
      mail.save();
      
      this.transitionToRoute('mail', mail.id);
    }
  }
});