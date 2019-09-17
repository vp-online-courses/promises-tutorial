function log(a) {
    a.then(function (text) {
        console.log(text);
    });
}

module.exports = { log }