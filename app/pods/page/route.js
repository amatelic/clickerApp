import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('page', params.id);
  },

  actions: {

    error(error) {
      if (error && error.status === 400) {
        return this.transitionTo('404');
      }
    },
  },

});
