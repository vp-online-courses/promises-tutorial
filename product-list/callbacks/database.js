function getProducts(callback) {
    setTimeout(function () {
        callback(null, [
            {
                id: 1,
                name: 'Samsung Galaxy s9'
            },
            {
                id: 2,
                name: 'Apple iPhone XR'
            },
            {
                id: 3,
                name: 'Huawei Mate 20 Pro'
            },
            {
                id: 4,
                name: 'Xiaomi mi 9'
            }
        ]);
    }, 1000);
}

module.exports = {
    getProducts
}