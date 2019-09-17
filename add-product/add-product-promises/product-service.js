const db = require('./database.js');
const AuthenticationService = require('./authentication-service.js');

function addProduct(product, quantity) {
    const token = AuthenticationService.getToken();
    db.getUserIdByToken(token)
        .then(function (userId) {
            return db.userHasPermission(userId, 'add_products');
        })
        .then(function (hasPermission) {
            if (!hasPermission) {
                throw new Error('Not enough permissions');
            }
            return db.addProduct(product);
        })
        .then(function (productId) {
            return db.addToStock(productId, quantity);
        })
        .catch(function (error) {
            console.log('Error: ' + error);
        });
}

module.exports = {
    addProduct
}