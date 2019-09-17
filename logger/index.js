const { log } = require('./logger');

const information = new Promise(function (resolve, reject) {
	return resolve('Received a request from the client with an id=20');
});

log(information);
