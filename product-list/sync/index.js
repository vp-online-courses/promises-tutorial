const customer = require('./customer.js');
const db = require('./database.js');
const PriceAPI = require('./price.js');
const WarehouseAPI = require('./warehouse.js');
const ProductListPage = require('./product-list-page.js');

const customerRegion = customer.getCustomerRegion();
const products = db.getProducts({limit: 20});

const productsWithPrices = [];
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const price = PriceAPI.getPrice(product.id);
    const warehouseRegion = WarehouseAPI.getProductLocation(product.id);
    const delivery = customerRegion === warehouseRegion ? '3-5 days' : '24 days';
    productsWithPrices.push({
        product: product,
        price: price,
        delivery: delivery
    });
}

ProductListPage.render(productsWithPrices);
