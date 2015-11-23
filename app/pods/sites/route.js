import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('sites', {});
  },

  actions: {
    transitionToPage(id) {
      this.transitionTo('/sites/1');
    },

    error(error, transition) {
      if (error && error.status === 400) {
        return this.transitionTo('404');
      }
    },
  },
});
