import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return {
			orgTypes: ['Sandbox', 'Production']
		}
	}
});
