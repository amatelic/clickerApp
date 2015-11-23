import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('sites');
  this.route('page', {path: 'sites/:id'});
  this.route('settings');
});

export default Router;
