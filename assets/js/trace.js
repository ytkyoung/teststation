function trace(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j) {
        sum += arr[i][j];
      }
    }
  }
  return sum;
}

const result = trace([
  [1, 0, 1, 0],
  [0, 2, 0, 2],
  [3, 0, 3, 0],
  [0, 4, 0, 4],
]);
console.log(result);

// const trace = arr => arr.reduce((a, e, i) => a + e[i], 0);

// const trace = arr => arr.reduce((s, _, i) => s + arr[i][i], 0);

// function trace(arr) {
// 	return arr.map((a,i)=>arr[i][i]).reduce((a,b)=>a+b)
// }
