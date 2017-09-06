import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import config from 'slide/config/environment';

export default AjaxService.extend({
	host: config.APP.backendDomain
});
