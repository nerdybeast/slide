import Ember from 'ember';

export default Ember.Route.extend({

	backend: Ember.inject.service('backend'),

	model() {
		return this.get('backend').getOrgs();
	}

});
