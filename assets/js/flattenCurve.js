function flattenCurve(arr) {
  if (arr.length === 0) {
    return [];
  }
  return Array.from({ length: arr.length })
    .fill(arr.reduce((a, c) => a + c) / arr.length)
    .map((x) => +x.toFixed(1));
}
const result = flattenCurve([-10.3, -10.3, -10.3]);

console.log(result);

// flattenCurve([1, 2, 3, 4, 5]) ➞ [3, 3, 3, 3, 3]

// flattenCurve([0, 0, 0, 2, 7, 3]) ➞ [2, 2, 2, 2, 2, 2]

// flattenCurve([4]) ➞ [4]

// flattenCurve([]) ➞ []
