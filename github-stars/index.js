const base64 = require('base-64');
const fetch = require('isomorphic-fetch');
const credentials = require('./credentials.js');

const headers = new Headers();
headers.set(
    'Authorization',
    'Basic ' + base64.encode(credentials.username + ":" + credentials.password)
);
