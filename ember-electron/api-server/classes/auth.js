const jsforce = require('jsforce');

class Auth {

	constructor(orgType) {

		this.orgType = (orgType || 'sandbox').toLowerCase();

		this.loginUrlMap = {
			production: 'login',
			sandbox: 'test'
		};

		this.loginUrl = `https://${loginUrlMap[this.orgType]}.salesforce.com`;
	}

	login(username, password) {

		let conn = new jsforce.Connection({
			loginUrl: this.loginUrl
		});

		return conn.login(username, password).then(res => {

			return conn.identity();

		}).then(identity => {

			return {
				identity,
				accessToken: conn.accessToken,
				instanceUrl: conn.instanceUrl
			};

		});

	}
}

module.exports = Auth;