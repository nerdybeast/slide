import DS from 'ember-data';

export default DS.Model.extend({
	accessToken: DS.attr(),
	name: DS.attr(),
	email: DS.attr(),
	urls: DS.attr(),
	username: DS.attr(),
});
