function addPriceToProduct(product, callback) {
    setTimeout(function () {
        product.price = Math.round(Math.random() * 10000) / 100;
        callback(null, product);
    }, 1000);
}

module.exports = {
    addPriceToProduct
}