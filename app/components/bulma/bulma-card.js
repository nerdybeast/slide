import Ember from 'ember';

export default Ember.Component.extend({
	hasHeader: Ember.computed.notEmpty('title')
});
