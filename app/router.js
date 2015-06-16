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
  this.resource('committees', function() {
    this.resource('house', { path:'committees/house'});
    this.resource('senate', { path:'committees/senate'});
  });
  this.resource('housecommittee', { path:':committee_id'});

});

export default Router;
