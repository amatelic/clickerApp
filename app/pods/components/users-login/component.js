import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['container'],
  submit(e) {
    e.preventDefault();
    this.sendAction('action', this.get('email'), this.get('password'));
  },

  keyUp(e) {
    this.set(e.target.dataset.name, e.target.value);
  },

});
