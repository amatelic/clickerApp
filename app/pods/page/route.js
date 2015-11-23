import Ember from 'ember';
import moment from 'moment';
import  {ajax}  from 'ic-ajax';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('page', params.id);
  },

  actions: {
    loading(transition, originRoute) {
    },

    error(error, transition) {
      if (error && error.status === 400) {
        return this.transitionTo('404');
      }
    },
  },

});
