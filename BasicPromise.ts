const promise = new Promise<string>((resolve, reject) => {
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
function getNumber(): Promise<number> {
  return new Promise((resolve) => {
    resolve(10);
  });
}
console.log(getNumber());
