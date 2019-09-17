function addRegionToProduct(product) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            product.region = Math.random() < 0.5 ? 'Europe' : 'US'
            resolve(product);
        }, 1000);
    });
}

module.exports = {
    addRegionToProduct
}