Undertale.MailboxController = Ember.ArrayController.extend({
  actions: {
    sortByRecent: function () {
      'use strict';
      this.set('sortProperties', ['date']);
    }
  }
});