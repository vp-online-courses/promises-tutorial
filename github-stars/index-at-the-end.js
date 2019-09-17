const base64 = require('base-64');
const fetch = require('isomorphic-fetch');
const credentials = require('./credentials.js');

const headers = new Headers();
headers.set(
    'Authorization',
    'Basic ' + base64.encode(credentials.username + ":" + credentials.password)
);

fetch(`https://api.github.com/users/amzn/repos?per_page=100`, {headers: headers})
    .then(function (response) {
        return response.json();
    })
    .then(function (highLevelRepositories) {
        const repositoryUrls = highLevelRepositories.map(function (repository) {
            return repository.url;
        });
        const requests = repositoryUrls.map(function (url) {
            return fetch(url, {headers: headers});
        });
        return Promise.all(requests);
    })
    .then(function (responses) {
        const repositoryPromises = responses.map(function (response) {
            return response.json();
        });
        return Promise.all(repositoryPromises);
    })
    .then(function (detailedRepositories) {
        let stars = 0;
        detailedRepositories.forEach(function (repository) {
            stars += repository.stargazers_count;
        });
        console.log(stars);
    })