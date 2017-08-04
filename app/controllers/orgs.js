import Ember from 'ember';
const { ipcRenderer } = requireNode('electron');

export default Ember.Controller.extend({

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
		orgSelected(org) {
			this.transitionToRoute('org', org);
		}	
	}
});
