const { join } = require('path');
const path = require('path');
const express = require('express');
const apiRouter = require(join(__dirname, 'api'));

console.log(`__dirname from routes index => ${__dirname}`);

let router = express.Router();

router.get('/', (req, res) => {
	return res.json({});
});

router.use('/api', apiRouter);

module.exports = router;