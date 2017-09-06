import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'span',
	classNames: ['icon'],
	classNameBindings: ['hasColor:getColor', 'hasSize:getSize'],

	color: null,
	size: null,
	icon: null,
	
	hasColor: Ember.computed.notEmpty('color'),
	hasSize: Ember.computed.notEmpty('size'),

	getColor: Ember.computed('color', function() {
		let color = this.get('color');
		return color ? `has-text-${color}` : '';
	}),

	getSize: Ember.computed('size', function() {
		let size = this.get('size');
		return size ? `is-${size}` : '';
	})
});
