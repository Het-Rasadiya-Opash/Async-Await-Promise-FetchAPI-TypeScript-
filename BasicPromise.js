const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello");
    }, 1000);
})
    .then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.log(error);
});
//Typed Promise
function getNumber() {
    return new Promise((resolve) => {
        resolve(10);
    });
}
console.log(getNumber());
export {};
//# sourceMappingURL=BasicPromise.js.map