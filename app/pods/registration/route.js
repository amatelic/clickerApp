import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  actions: {
    createNewUser(user) {
      let record = this.store.createRecord('user', {
        name: user[0],
        username: user[1],
        email: user[2],
        password: user[3],
        createdat: moment(),
        active: true,
        sites: [],
      });

      record.save().then(onSuccess, onFail);

      function  onSuccess(response) {
        alert("user was created")
      }

      function onFail(response) {
        console.log(response, record.get('isError'));
      }
    },
  },
});
