import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('sites', {});
  },

  actions: {
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
