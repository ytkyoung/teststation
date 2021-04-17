function numberLenSort(arr) {
  return arr.sort((a, b) => a.toString().length - b.toString().length);
}
const result = numberLenSort([9, 8, 7, 6, 5, 4, 31, 2, 1, 3]);
console.log(result);
