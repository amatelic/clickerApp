import Ember from 'ember';

export default function userModel({id, name, email, created, active}) {
  return Ember.Object.extend({
      id,
      name,
      email,
      created,
      active,
    }).create();
}
