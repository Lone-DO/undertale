Undertale.MailboxController = Ember.ArrayController.extend({
  actions: {
    sortByRecent: function () {
      this.set('sortProperties', ['date']);
    }
  }
});