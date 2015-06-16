import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('legislators', { path: '/'}, function() {
    this.resource('contact', { path: 'contact/:zip'});
  });
  this.resource('upcomingbills');
  this.resource('committees');
});

export default Router;
