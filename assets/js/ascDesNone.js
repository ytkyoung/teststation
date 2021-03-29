function ascDesNone(arr, str) {
  if (str === 'Asc') {
    return arr.sort((a, b) => a - b);
  }
  if (str === 'Des') {
    return arr.sort((a, b) => b - a);
  }
  return arr;
}

// function ascDesNone(arr, str) {
//   return str === 'None' ? arr : arr.sort((a, b) => (str === 'Asc' ? a - b : b - a));
// }

const result = ascDesNone([4, 3, 2, 1], 'Asc');
console.log(result);
