import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.peekRecord('user', 1);
  },

  actions: {
    loading(a, b, c) {
      console.log('Loading');
    },

    transitionToPage(id) {
      this.transitionTo(`/sites/${id}`);
    },

    error(error) {
      if (error && error.status === 400) {
        return this.transitionTo('404');
      }
    },
  },
});
