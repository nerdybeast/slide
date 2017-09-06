import Ember from 'ember';
const { ipcRenderer } = requireNode('electron');

export default Ember.Controller.extend({

	loading: false,

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
			this.transitionToRoute('org', org.id);
		},

		confirmOrgDeletion(org) {
			this.set('modalActive', true);
			return false;
		},

		closeModal() {
			this.set('modalActive', false);
		},

		deleteOrg() {
			
			this.set('loading', true);

			return new Ember.RSVP.Promise((resolve, reject) => {
				setTimeout(() => {
					this.send('closeModal');
					return resolve();
				}, 2000);
			});
		}
	}
});
