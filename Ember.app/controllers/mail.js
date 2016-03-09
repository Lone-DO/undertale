//Local Storage Adapter
Undertale.ApplicationSerializer = DS.LSSerializer.extend();
Undertale.ApplicationAdapter = DS.LSAdapter.extend();

Undertale.MailController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function () {
      'use strict';
      this.set('isEditing', true);
    },
    save: function () {
      'use strict';
      this.set('isEditing', false);
    },
    delete: function () {
      'use strict';
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transistionToRoute('mailbox');
      }
    }
  }
});