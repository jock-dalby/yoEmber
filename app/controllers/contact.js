import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  message: '',
  // Check for valid email address
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  // Check message text area not empty
  isMessage: Ember.computed.empty('message'),
  // If not valid email or message box is empty, disable 'Send Message' button
  isDisabled: Ember.computed('isValid', 'isMessage', function() {
    return !this.get('isValid') || this.get('isMessage');
  }),


  actions: {
    sendMessage() {
      alert(`Sending message "${this.get('message')}" from ${this.get('emailAddress')}`);
      this.set('responseMessage', `${this.get('emailAddress')}, we got your message and we’ll get in touch soon`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }

});
