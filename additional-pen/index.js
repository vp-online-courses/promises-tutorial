function askJohn() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve('Yep, I got one extra pen.'), 3000);
    });
}
function askEugene() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => reject('Sorry man, I got only one.'), 5000);
    });
}
function askSusy() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve('Sure, I have a pen for you!'), 2000);
    });
}
