const customer = require('./customer.js');
const db = require('./database.js');
const PriceAPI = require('./price.js');
const WarehouseAPI = require('./warehouse.js');
const ProductListPage = require('./product-list-page.js');

const productsWithPrices = [];
let productsQuantity = null;
db.getProducts(iterateOverProducts);

function iterateOverProducts(err, products) {
    if (err !== null) {
        console.log(err);
    }
    productsQuantity = products.length;
    products.forEach(addPriceToProduct);
}

function addPriceToProduct(product) {
    PriceAPI.addPriceToProduct(product, addWarehouseRegionToProduct);
}

function addWarehouseRegionToProduct(err, product) {
    if (err !== null) {
        console.log(err);
    }
    WarehouseAPI.addRegionToProduct(product, addProductToList);
}

function addProductToList(err, product) {
    if (err !== null) {
        console.log(err);
    }
    const deliveryTime = customer.getRegion() === product.region
        ? '3 - 5 days'
        : '24 days';
    productsWithPrices.push(product);
    renderProducts(productsWithPrices);
}

function renderProducts(currentProducts) {
    if (currentProducts.length === productsQuantity) {
        ProductListPage.render(currentProducts);
    }
}