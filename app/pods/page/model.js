import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string'),
  collection: DS.attr('array'),
});
