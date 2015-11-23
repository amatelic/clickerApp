import DS from 'ember-data';
import moment from 'moment';
export default DS.Transform.extend({
  deserialize(serialized) {
    return moment(serialized, 'YYYYMMDD').fromNow();
  },

  serialize(deserialized) {
    return deserialized;
  },

});
