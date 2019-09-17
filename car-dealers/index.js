function ask1stDealer() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve(8000) }, 3000);
    });
}
function ask2ndDealer() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve(12000) }, 5000);
    });
}
function ask3rdDealer() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve(10000) }, 8000);
    });
}