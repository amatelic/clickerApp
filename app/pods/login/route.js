import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    logIn() {
      var email = $('#email').val();
      var password = $('#password').val();
      let users = this.store.query('user', { email, password }).then(() => {
        console.log('To dela');
      });
    },
  },
});
