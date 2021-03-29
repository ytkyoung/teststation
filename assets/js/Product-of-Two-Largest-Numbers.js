function product(arr) {
  const res = arr.sort((a, b) => b - a).filter((item, pos) => arr.indexOf(item) === pos);
  return res.length <= 1 ? res[0] * res[0] : res[0] * res[1];
}
const result = product([8, 8, 8]);
console.log(result);
