import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url2 = 'http://congress.api.sunlightfoundation.com/committees?chamber=senate&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7';
    return Ember.$.getJSON(url2).then(function(responseJSON) {
      var senateCommittees = [];
      responseJSON.results.forEach(function(senateCommittee) {
      senateCommittees.push(senateCommittee);
      });
      return senateCommittees;
    });
  }
});
