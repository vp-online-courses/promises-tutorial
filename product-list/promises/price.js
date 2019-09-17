function addPriceToProduct(product) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            product.price = Math.round(Math.random() * 10000) / 100;
            resolve(product);
        }, 1000);
    });
}

module.exports = {
    addPriceToProduct
}