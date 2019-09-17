const ProductService = require('./product-service.js');

const request = require('./request.js');

const params = request.getParams();
const product = {
    title: params.title,
    price: params.price,
};

ProductService.addProduct(product, 400);