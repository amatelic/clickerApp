import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //this.store.query('sites', {});
    return [1,2,3,4,5];
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
