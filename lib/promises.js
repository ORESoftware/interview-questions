// Without running the code, tell us what numbers will be logged, in what order

console.log(1);

new Promise(function (resolve, reject) {
  console.log(2);
})
  .then(function () {
    console.log(3);
  });

console.log(4);