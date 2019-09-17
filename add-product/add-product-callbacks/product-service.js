const db = require('./database.js');
const AuthenticationService = require('./authentication-service.js');

function addProduct(product, quantity) {
    const token = AuthenticationService.getToken();
    db.getUserIdByToken(token, function (error, userId) {
        if (error) {
            console.log(error);
            return;
        }
        db.userHasPermission(userId, 'add_products', function (error, hasPermission) {
            if (error) {
                console.log(error);
                return;
            }
            if (!hasPermission) {
                console.log('Not enough permissions');
                return;
            }
            db.addProduct(product, function (productId) {
                if (error) {
                    console.log(error);
                    return;
                }
                db.addToStock(productId, quantity);
            });
        });
    });
}

module.exports = {
    addProduct
}