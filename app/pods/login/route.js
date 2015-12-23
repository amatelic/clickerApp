import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    //used for intersecting the change of changes
    willTransition(transition) {
      // var answer = prompt('Do you went to redirect to other site [y/n]');
      // if (answer !== 'y') transition.abort();
    },

    login(email, username) {
      Ember.$.post('http://clickerapp.dev/users', {email, username}).then((response) => {
        let user = this.store.push(response.data);
        this.transitionTo('sites');

      }, (error) => console.error(error));
    },
  },
});
