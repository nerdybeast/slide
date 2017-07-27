import Ember from 'ember';
const { ipcRenderer } = requireNode('electron');

export default Ember.Component.extend({
	
	classNames: ['panel', 'panel-default'],
	
	model: null,
	selectedOrgType: null,

	isNew: Ember.computed.equal('model', null),

	orgName: Ember.computed('isNew', function() {
		return this.get('isNew') ? 'New Connection' : this.get('model.name');
	}),

	actions: {
		orgTypeSelection(orgType) {
			this.set('selectedOrgType', orgType);
		},
		addNewOrg() {
			//Ember.$.get(this.get('backend.authUrl'));
			ipcRenderer.send('auth', {
				orgType: this.get('selectedOrgType')
			});
		}
	}
});
