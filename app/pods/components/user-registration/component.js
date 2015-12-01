import Ember from 'ember';

export default Ember.Component.extend({
  timer: null,
  didInsertElement() {
    this._super(...arguments);
    this.allInputs = this.$('input');
    this.self = this;
    this.noUserInput = this.createError('The user field is empty');
  },

  actions: {
    correctName(e) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        console.log('To dela');
      }, 1050);

    },

    correctUsername(value) {

    },

    emailCheck(value) {

    },

    correctPassword(value) {

    },

    createUser(e) {
      //loop all inputs
      let actionMethod = Object.keys(this.actions);
      actionMethod.pop();
      this.allInputs.each((i,d) => {
        if (actionMethod.length > i) {
          let input = this.allInputs.eq(i);
          if (!d.value && input.find('p')) {
            let error = this.createError('test');
            input.after(this.createError('Field is empty'));
          }

          this.actions[actionMethod[i]].call(this, d);
        }
      });
    },
  },

  createError(text) {
    return this.$('<p/>').addClass('bg-danger').text(text);
  },
});
