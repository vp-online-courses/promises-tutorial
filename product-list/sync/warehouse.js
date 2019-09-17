function getProductLocation(productId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve (Math.random() < 0.5 ? 'Europe' : 'US');
        });
    });
}

module.exports = {
    getProductLocation
}