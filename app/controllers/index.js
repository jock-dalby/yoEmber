import Ember from 'ember';

export default Ember.Controller.extend({

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
      // and shows an alert box, sets up a responseMessage property,
      // and finally deletes the content of emailAddress.
      alert(`Saving ${this.get('emailAddress')} in progress...`);
      this.set('responseMessage', `Thank you! We have now saved your email adress: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }

});
