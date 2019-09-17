const mysql      = require('mysql');
let connection = null;
setupConnection();

function setupConnection() {
    connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'password',
        database : 'ecommerce_website'
    });
    connection.connect();
}

function getUserIdByToken(token, callback) {
    connection.query(`SELECT user_id FROM user_tokens WHERE token="${token}"`, function (error, results, fields) {
        if (error) {
            return callback(error);
        }
        return callback(null, results);
    });
}

function userHasPermission(userId, permission, callback) {
    connection.query(`SELECT user_id, permission FROM user_permissions`, function (error, results, fields) {
        if (error) {
            return callback(error);
        }
        const permissions = results.map(function (row) {
            return row.permission;
        });
        const permissionExists = permissions.includes(permission);
        return callback(null, permissionExists);
    });
}

function addProduct(product, callback) {
    connection.query(`INSERT INTO products (title, price) VALUES ("${product.title}", ${product.price})`, function (error, results, fields) {
        if (error) {
            return callback(error);
        }
        const productId = results.insertId;
        return callback(null, productId);
    });
}

function addToStock(productId, quantity, callback) {
    connection.query(`INSERT INTO stock VALUES (${productId}, ${quantity})`, function (error, results, fields) {

    });
}

module.exports = {
    setupConnection,
    getUserIdByToken,
    userHasPermission,
    addProduct,
    addToStock
};