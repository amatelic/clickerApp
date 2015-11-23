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
});
