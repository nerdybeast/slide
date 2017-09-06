import DS from 'ember-data';

export default DS.Model.extend({
	createdById: DS.attr(),
	createdByName: DS.attr(),
	createdDate: DS.attr(),
	directoryName: DS.attr(),
	fileName: DS.attr(),
	fullName: DS.attr(),
	inFolder: DS.attr(),
	lastModifiedById: DS.attr(),
	lastModifiedByName: DS.attr(),
	lastModifiedDate: DS.attr(),
	manageableState: DS.attr(),
	metaFile: DS.attr(),
	suffix: DS.attr(),
	type: DS.attr(),
});
