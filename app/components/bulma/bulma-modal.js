import Ember from 'ember';

export default Ember.Component.extend({
	
	classNames: ['modal'],
	classNameBindings: ['show:is-active'],
	
	show: false,
	closeable: true,

	isActive: Ember.computed('show', 'closeable', function() {
		let { show, closeable } = this.getProperties('show', 'closeable');
		return show && !closeable;
	}),

	actions: {

		onConfirm() {
			
			this.set('closeable', false);

			//Get the action passed into the component.
			let onConfirm = this.get('onConfirm')();

			onConfirm.then(() => {

				

			}).finally(() => {
				this.setProperties({
					closeable: true
				});
			});
		}

	}
});
