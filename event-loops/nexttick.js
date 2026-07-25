console.log("A");

process.nextTick(() => {
  console.log("B");
});

process.nextTick(() => {
  console.log("C");
});
console.log("D");