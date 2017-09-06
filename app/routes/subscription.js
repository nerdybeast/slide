import Ember from 'ember';

export default Ember.Route.extend({
	
	backend: Ember.inject.service('backend'),

	model(params) {
		return this.get('backend').getAvailableSubscription(params.org_id);
	}

});
