import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var senateCommittees = [];

    var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=house&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var houseCommittees = [];
      responseJSON.results.forEach(function(houseCommittee) {
        houseCommittees.push(houseCommittee);
      });
      return houseCommittees;
    });
    //
    // debugger;
    //
    // var url2 = 'http://congress.api.sunlightfoundation.com/committees?chamber=senate&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7';
    // Ember.$.getJSON(url2).then(function(responseJSON) {
    //   responseJSON.results.forEach(function(senateCommittee) {
    //     senateCommittees.push(senateCommittee);
    //   });
    // });
    // return Ember.RSVP.hash({
    //   houseCommittees: houseCommittees,
    //   senateCommittees: senateCommittees
    // });
  }
});
