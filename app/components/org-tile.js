import Ember from 'ember';

export default Ember.Component.extend({
	
	classNames: ['panel', 'panel-default'],
	
	model: null,

	isNew: Ember.computed.equal('model', null)
});
