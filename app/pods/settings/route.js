import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      name: 'anze matelic',
      email: 'amatelic93@gmail.com',
      image: 'http://fakeimg.pl/100x100/',
      created: '12.5.2015',
      active: false,
      userId: '#4321',
    };
  },

  actions: {
    updateActivation(status) {
      //Todo 1: send data to server
      //Todo 2: display changes to ui
    },
  },
});
