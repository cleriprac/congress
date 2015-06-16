import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=house&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var houseCommittees = [];
      responseJSON.results.forEach(function(houseCommittee) {
      houseCommittees.push(houseCommittee);
      });
      return houseCommittees;
    });
  }
});
