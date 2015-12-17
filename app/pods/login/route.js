import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    logIn(email, username) {
      console.log(email. username);
      let users = this.store.query('user', { email, password }).then(() => {
        console.log('To dela');
      }).catch(function (error) {
        console.log(error);
      });
    },
  },
});
