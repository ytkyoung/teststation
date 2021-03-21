function clone(arr) {
  const res = [];
  arr.map((x) => res.push(x));
  res.push(arr);
  return res;
}

// function clone(arr) {
//   return [...arr, arr];
// }

const result = clone([1, 1]);
console.log(result);
