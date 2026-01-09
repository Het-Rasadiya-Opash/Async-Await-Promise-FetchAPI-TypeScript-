async function greet() {
    return "Hello";
}
console.log("Greet funciton", greet());
async function main() {
    const msg = await greet();
    console.log("Main ", msg);
}
main();
export {};
//# sourceMappingURL=AsyncAwait.js.map