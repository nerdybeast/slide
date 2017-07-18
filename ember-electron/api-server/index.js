const { join } = require('path');
const express = require('express');
const cors = require('cors');
const routes = require(join(__dirname, 'routes'));

module.exports = function() {

	let app = express();
	
	app.use(cors());
	app.use(routes);

	app.listen(5090, () => console.log('express app listening on port 5090'));

	return app;
};