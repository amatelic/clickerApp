import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  active: DS.attr('string'),
  sites: DS.attr('string'),
  createdat: DS.attr('moment'),
});
