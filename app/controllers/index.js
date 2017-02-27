import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Coming Soon',
  responseMessage: '',
  emailAddress: '',
  // Check for valid email address
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  // If not valid email, disable buttons
  isDisabled: Ember.computed.not('isValid'),

  /*
  Below would disable button is email input left blank.

  isDisabled: Ember.computed('emailAddress', function() {
   return this.get('emailAddress') === '';
  })

  NOTE: Use pre-defined computed property functions to write the same in less code:
  isDisabled: Ember.computed.empty('emailAddress')
  */

  actions: {
    saveInvitation() {
      // If you click on the button, the saveInvitation action is called
      // and saves the record, updates responseMessage property,
      // and finally deletes the content of emailAddress.
      const email = this.get('emailAddress');
      const newInvitation = this.store.createRecord('invitation', {
        email: email
      });

      /* ES5 method
      const self = this;
      newInvitation.save().then(function(response) {
        self.set('responseMessage', `Thank you! We have now saved your email address: ${self.get('emailAddress')}`);
        self.set('emailAddress', '');
      });
      */

      // ES6 method
      newInvitation.save().then(response => {
        this.set('responseMessage', `Thank you! We have now saved your email address: ${this.get('emailAddress')}`);
        console.log(`${response.get('id')} complete.`)
        this.set('emailAddress', '');
      });

    }
  }

});
