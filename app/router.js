import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
  this.route('orgs');
  this.route('new-org');
  this.route('org', { path: '/org/:org_id' });
});

export default Router;
