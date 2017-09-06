import Ember from 'ember';

export default Ember.Route.extend({
	
	backend: Ember.inject.service('backend'),

	model(params) {
		return this.get('backend').getOrgById(params.org_id);
	},

	afterModel(model, transition) {
		if(!model.get('subscription')) {
			this.transitionTo('subscription', model.id);
		}
	}
});
