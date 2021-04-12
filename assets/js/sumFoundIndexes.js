function sumFoundIndexes(arr, n) {
  const hit = [];
  arr.map((x, i) => (x === n ? hit.push(i) : ''));
  return hit.length === 0 ? 0 : hit.reduce((a, c) => a + c) || 0;
}

const result = sumFoundIndexes([0, 3, 3, 0, 0, 3], 3);
console.log(result);
