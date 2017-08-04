import Ember from 'ember';
const { ipcRenderer } = requireNode('electron');

export default Ember.Component.extend({
	
	classNames: ['panel', 'panel-default'],
	classNameBindings: ['isClickable:clickable'],
	
	org: null,
	orgType: null,
	name: null,

	isNew: Ember.computed.equal('org', null),

	isClickable: Ember.computed.equal('isNew', false),

	orgName: Ember.computed('isNew', function() {
		return this.get('isNew') ? 'New Connection' : this.get('org.name');
	}),

	actions: {
		orgTypeChange(orgType) {
			this.set('orgType', orgType);
		},
		addNewOrg() {
			ipcRenderer.send('auth', {
				orgType: this.get('orgType'),
				orgName: this.get('name')
			});
		}
	}
});
