const customer = require('./customer.js');
const db = require('./database.js');
const PriceAPI = require('./price.js');
const WarehouseAPI = require('./warehouse.js');
const ProductListPage = require('./product-list-page.js');

function enrichProductWithData(product) {
    return PriceAPI.addPriceToProduct(product)
        .then(WarehouseAPI.addRegionToProduct)
        .then(function (product) {
            product.delivery =
                customer.getCustomerRegion() === product.region
                ? '3 - 5 days'
                : '24 days';
            return product;
        }).catch(function (err) {
            console.log(err);
        });
}

db.getProducts()
    .then(function (products) {
        return products.map(enrichProductWithData);
    })
    .then(function (products) {
        return Promise.all(products);
    })
    .then(ProductListPage.render)
    .catch(function (err) {
        console.log(err);
    });