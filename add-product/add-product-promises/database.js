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

function getUserIdByToken(token) {
    return new Promise(function (resolve, reject) {
        connection.query(`SELECT user_id FROM user_tokens WHERE token="${token}"`, function (error, results, fields) {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
}

function userHasPermission(userId, permission) {
    return new Promise(function (resolve, reject) {
        connection.query(`SELECT user_id, permission FROM user_permissions`, function (error, results, fields) {
            if (error) {
                return reject(error);
            }
            const permissions = results.map(function (row) {
                return row.permission;
            });
            const permissionExists = permissions.includes(permission);
            return resolve(permissionExists);
        });
    });
}

function addProduct(product) {
    return new Promise(function (resolve, reject) {
        connection.query(`INSERT INTO products (title, price) VALUES ("${product.title}", ${product.price})`, function (error, results, fields) {
            if (error) {
                return reject(error);
            }
            const productId = results.insertId;
            return resolve(productId);
        });
    });
}

function addToStock(productId, quantity) {
    return new Promise(function (resolve, reject) {
        connection.query(`INSERT INTO stock VALUES (${productId}, ${quantity})`, function (error, results, fields) {
            if (error) {
                return reject(error);
            }
            return resolve(true);
        });
    });
}

module.exports = {
    setupConnection,
    getUserIdByToken,
    userHasPermission,
    addProduct,
    addToStock
};