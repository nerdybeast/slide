import Ember from 'ember';
const { ipcRenderer } = requireNode('electron');

export default Ember.Controller.extend({

	backend: Ember.inject.service('backend'),

	orgType: null,
	username: null,
	password: null,

	init() {
		
		this._super(...arguments);
		
		ipcRenderer.on('auth-result', (event, orgId) => {
			this.transitionToRoute('org', orgId);
		});
	},

	willDestroy() {
		this._super(...arguments);
		ipcRenderer.removeAllListeners('auth-result');
	},

	actions: {

		orgTypeSelection(orgType) {
			this.set('orgType', orgType);
		},

		addNewOrg() {
			//Ember.$.get(this.get('backend.authUrl'));
			ipcRenderer.send('auth', {
				orgType: this.get('orgType')
			});
		}
	}

});
