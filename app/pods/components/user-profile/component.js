import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    //changing user accaunt
    toggleUser() {
      let user = this.get('user.active');
      this.set('user.active', !user);
    },
  },
});
