// function isEqual(arr) {
//   return arr.map((x) => [...`${x}`].reduce((a, c) => +a + +c)).reduce((a, c) => a - c === 0);
// }

const isEqual = (arr) => arr.map((x) => [...`${x}`].reduce((a, c) => +a + +c)).reduce((a, c) => a - c === 0);

const result = isEqual([105, 42]);
console.log(result);
