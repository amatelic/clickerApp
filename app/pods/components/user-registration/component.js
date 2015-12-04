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
      console.log('To dela');
    },

    correctUsername(value) {},

    emailCheck(value) {},

    correctPassword(value) {},

    createUser(e) {
      //loop all inputs

      //Change code complityl
      var user = [];
      let actionMethod = Object.keys(this.actions);
      actionMethod.pop();
      this.allInputs.each((i,d) => {
        if (actionMethod.length > i) {
          // let input = this.allInputs.eq(i);
          // if (!d.value && input.find('p')) {
          //   let error = this.createError('test');
          //   input.after(this.createError('Field is empty'));
          // }
          //
          // this.actions[actionMethod[i]].call(this, d);
          user.push(d.value);
        }

      });
      this.sendAction('action', user);
    },
  },

  createError(text) {
    return this.$('<p/>').addClass('bg-danger').text(text);
  },
});
