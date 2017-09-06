import Ember from 'ember';
import config from 'slide/config/environment';

let domain = config.APP.backendDomain;

export default Ember.Service.extend({

	store: Ember.inject.service('store'),
	ajax: Ember.inject.service('ajax'),

	domain,
	authUrl: `${domain}/oauth2/auth`,

	push(ajaxResponse) {
		return this.get('store').push({ data: ajaxResponse.data });
	},

	GET(url) {
		return Ember.$.getJSON(`${domain}${url}`);
	},

	getOrgById(id) {
		return this.GET(`/orgs/${id}`).then(res => this.push(res));
	},

	getOrgs() {
		return this.GET(`/orgs`).then(res => this.push(res));
	},

	deleteOrg(org) {
		
	},

	getAvailableSubscription(orgId) {
		return this.GET(`/orgs/${orgId}/availablesubscription`).then(res => this.push(res));
	}

});
