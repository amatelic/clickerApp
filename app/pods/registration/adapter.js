import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3000',
  handleResponse: function(status, headers, payload) {
    if (status === 422 && payload.errors) {
      return new DS.InvalidError(payload.errors);
    }

    return this._super(...arguments);
  },
});
