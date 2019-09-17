function getProducts(options) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve ([
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
        });
    });
}

module.exports = {
    getProducts
}