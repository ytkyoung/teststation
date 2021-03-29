function largestGap(arr) {
  const sorted = arr.sort((a, b) => a - b);
  const gap = [];
  for (let i = 0; i < sorted.length - 1; i++) {
    gap.push(sorted[i + 1] - sorted[i]);
  }
  return Math.max(...gap);
}

const result = largestGap([9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5]);
console.log(result);

// function largestGap(arr) {
//     arr.sort((a, b) => a - b);
//     return Math.max(...arr.map((x, i) => i && x - arr[i - 1]));
//   }

// const largestGap = arr => (
// 	arr = arr.sort((a, b) => a - b),
// 	Math.max(...arr.slice(1).map((num, i) => num - arr[i]))
// );

// const largestGap = (r, k=-1) => {
// 	return k < 0 ? largestGap(r.sort((a, b) => a-b), 0) : r.length > 1 ?
// 			largestGap(r.slice(1), r[1] - r[0] > k ? r[1] - r[0] : k) : k
// }
