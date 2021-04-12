function neighboring(str) {
  const res = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) + 1 === str.charCodeAt(i + 1) || str.charCodeAt(i) - 1 === str.charCodeAt(i + 1)) {
      res.push(true);
    }
  }
  return res.length + 1 === str.length;
}
const result = neighboring('abcdedcba');
console.log(result);
