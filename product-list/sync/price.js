function getPrice(productId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve (Math.round(Math.random() * 10000) / 100);
        });
    });
}

module.exports = {
    getPrice
}