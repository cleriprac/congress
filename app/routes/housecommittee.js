import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = "http://congress.api.sunlightfoundation.com/committees?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&parent_committee_id=" + params.committee_id;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var subcommittees = [];
      responseJSON.results.forEach(function(committee) {
        if (committee.parent_committee_id != null) {
          subcommittees.push(committee);
        };
      });
      return subcommittees;
    });
  }
});
