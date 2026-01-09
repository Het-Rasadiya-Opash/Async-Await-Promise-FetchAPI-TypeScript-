async function greet(): Promise<string> {
  return "Hello";
}

console.log("Greet funciton", greet());

async function main() {
  const msg = await greet();
  console.log("Main ", msg);
}
main();
