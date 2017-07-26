import Ember from 'ember';
import config from 'slide/config/environment';

export default Ember.Service.extend({

	store: Ember.inject.service('store'),

	authUrl: `${config.APP.backendDomain}/oauth2/auth`,

	getOrgs() {

		let store = this.get('store');

		return Ember.$.getJSON(`${config.APP.backendDomain}/orgs`).then(res => {
			
			//Push in all the orgs the user has already authenticated with.
			return store.push({ data: res.data });

			// store.createRecord('org', {
			// 	name: 'New'
			// });

			// return store.peekAll('org');
		});
	},

	login(credentials) {

		let options = {
			contentType: 'application/json',
			data: credentials,
			dataType: 'json'
		};

		return Ember.$.ajax(options).then(res => {

		});

	}

});
