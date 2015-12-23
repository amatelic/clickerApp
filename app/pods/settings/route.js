import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.peekRecord('user', 1);
  },

  actions: {
    updateActivation(status) {
      //Todo 1: send data to server
      //Todo 2: display changes to ui
    },
  },
});
