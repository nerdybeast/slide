import Ember from 'ember';
import config from 'slide/config/environment';

export default Ember.Service.extend({

	store: Ember.inject.service('store'),

	getOrgs() {

		let store = this.get('store');

		return Ember.$.getJSON(`${config.APP.backendDomain}/api/orgs`).then(res => {
			
			//Push in all the orgs the user has already authenticated with.
			return store.push({ data: res.data });

			// store.createRecord('org', {
			// 	name: 'New'
			// });

			// return store.peekAll('org');
		});
	}

});
