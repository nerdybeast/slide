const { join } = require('path');
const express = require('express');
const serializer = require(join(__dirname, '../../serializer'));
const Auth = require(join(__dirname, '../../classes/auth'));

let router = express.Router();

router.get('/orgs', (req, res) => {

	let data = [{
		"sub": "https://test.salesforce.com/id/00D17000000BLCaEAO/005G0000003pal8IAA",
		"user_id": "005G0000003pal8IAA",
		"organization_id": "00D17000000BLCaEAO",
		"preferred_username": "michael.penrod@vivint.com.devgrnacre",
		"nickname": "92929",
		"name": "Michael Penrod",
		"email": "michael.penrod@vivint.com",
		"email_verified": true,
		"given_name": "Michael",
		"family_name": "Penrod",
		"zoneinfo": "America/Denver",
		"photos": {
			"picture": "https://c.cs22.content.force.com/profilephoto/005/F",
			"thumbnail": "https://c.cs22.content.force.com/profilephoto/005/T"
		},
		"profile": "https://cs22.salesforce.com/005G0000003pal8IAA",
		"picture": "https://c.cs22.content.force.com/profilephoto/005/F",
		"address": {},
		"urls": {
			"enterprise": "https://cs22.salesforce.com/services/Soap/c/{version}/00D17000000BLCa",
			"metadata": "https://cs22.salesforce.com/services/Soap/m/{version}/00D17000000BLCa",
			"partner": "https://cs22.salesforce.com/services/Soap/u/{version}/00D17000000BLCa",
			"rest": "https://cs22.salesforce.com/services/data/v{version}/",
			"sobjects": "https://cs22.salesforce.com/services/data/v{version}/sobjects/",
			"search": "https://cs22.salesforce.com/services/data/v{version}/search/",
			"query": "https://cs22.salesforce.com/services/data/v{version}/query/",
			"recent": "https://cs22.salesforce.com/services/data/v{version}/recent/",
			"tooling_soap": "https://cs22.salesforce.com/services/Soap/T/{version}/00D17000000BLCa",
			"tooling_rest": "https://cs22.salesforce.com/services/data/v{version}/tooling/",
			"profile": "https://cs22.salesforce.com/005G0000003pal8IAA",
			"feeds": "https://cs22.salesforce.com/services/data/v{version}/chatter/feeds",
			"groups": "https://cs22.salesforce.com/services/data/v{version}/chatter/groups",
			"users": "https://cs22.salesforce.com/services/data/v{version}/chatter/users",
			"feed_items": "https://cs22.salesforce.com/services/data/v{version}/chatter/feed-items",
			"feed_elements": "https://cs22.salesforce.com/services/data/v{version}/chatter/feed-elements",
			"custom_domain": "https://vivint--DevGrnAcre.cs22.my.salesforce.com"
		},
		"active": true,
		"user_type": "STANDARD",
		"language": "en_US",
		"locale": "en_US",
		"utcOffset": -25200000,
		"updated_at": "2017-07-09T17:21:58.000+0000",
		"is_app_installed": true
	},
	{
		"sub": "https://test.salesforce.com/id/00D5B000000DH5DUAW/005G0000003pal8IAA",
		"user_id": "005G0000003pal8IAA",
		"organization_id": "00D5B000000DH5DUAW",
		"preferred_username": "michael.penrod@vivint.com.devmpenrod",
		"nickname": "92929",
		"name": "Michael Penrod",
		"email": "michael.penrod@vivint.com",
		"email_verified": true,
		"given_name": "Michael",
		"family_name": "Penrod",
		"zoneinfo": "America/Denver",
		"photos": {
			"picture": "https://c.cs52.content.force.com/profilephoto/005/F",
			"thumbnail": "https://c.cs52.content.force.com/profilephoto/005/T"
		},
		"profile": "https://cs52.salesforce.com/005G0000003pal8IAA",
		"picture": "https://c.cs52.content.force.com/profilephoto/005/F",
		"address": {},
		"urls": {
			"enterprise": "https://cs52.salesforce.com/services/Soap/c/{version}/00D5B000000DH5D",
			"metadata": "https://cs52.salesforce.com/services/Soap/m/{version}/00D5B000000DH5D",
			"partner": "https://cs52.salesforce.com/services/Soap/u/{version}/00D5B000000DH5D",
			"rest": "https://cs52.salesforce.com/services/data/v{version}/",
			"sobjects": "https://cs52.salesforce.com/services/data/v{version}/sobjects/",
			"search": "https://cs52.salesforce.com/services/data/v{version}/search/",
			"query": "https://cs52.salesforce.com/services/data/v{version}/query/",
			"recent": "https://cs52.salesforce.com/services/data/v{version}/recent/",
			"tooling_soap": "https://cs52.salesforce.com/services/Soap/T/{version}/00D5B000000DH5D",
			"tooling_rest": "https://cs52.salesforce.com/services/data/v{version}/tooling/",
			"profile": "https://cs52.salesforce.com/005G0000003pal8IAA",
			"feeds": "https://cs52.salesforce.com/services/data/v{version}/chatter/feeds",
			"groups": "https://cs52.salesforce.com/services/data/v{version}/chatter/groups",
			"users": "https://cs52.salesforce.com/services/data/v{version}/chatter/users",
			"feed_items": "https://cs52.salesforce.com/services/data/v{version}/chatter/feed-items",
			"feed_elements": "https://cs52.salesforce.com/services/data/v{version}/chatter/feed-elements",
			"custom_domain": "https://vivint--DevMPenrod.cs52.my.salesforce.com"
		},
		"active": true,
		"user_type": "STANDARD",
		"language": "en_US",
		"locale": "en_US",
		"utcOffset": -25200000,
		"updated_at": "2017-07-09T17:59:17.000+0000"
	}];

	data.forEach(org => org.urls = injectVersion('40.0', org.urls));

	const result = serializer.serialize('org', data);
	return res.json(result);
});

router.get('/auth', (req, res) => {

	let auth = new Auth('sandbox');

	auth.login('username', 'password').then(loginResult => {

		

	});

});

function injectVersion(version, urls) {
	
	for(prop in urls) {
		urls[prop] = urls[prop].replace('{version}', version);
	}

	return urls;
}

module.exports = router;