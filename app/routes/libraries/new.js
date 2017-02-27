import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('library')
  },

  actions: {
    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('libraries'));
    },

    willTransition() {
      // There is a built-in Ember.js action (event) called willTransition that is called when you leave a page (route).
      // We can use this action to reset the model if not saved it in the database yet.
      this.controller.get('model').rollbackAttributes();
    }
  }
});
