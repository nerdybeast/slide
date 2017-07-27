import Ember from 'ember';

export default Ember.Route.extend({

	backend: Ember.inject.service('backend'),

	model() {
		return Ember.RSVP.hash({
			orgs: this.get('backend').getOrgs(),
			orgTypes: ['Sandbox', 'Production']
		});
	}

});
