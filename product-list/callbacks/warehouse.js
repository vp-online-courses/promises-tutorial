function addRegionToProduct(product, callback) {
        setTimeout(function () {
            product.region = Math.random() < 0.5 ? 'Europe' : 'US'
            callback(null, product);
        }, 1000);
}

module.exports = {
    addRegionToProduct
}