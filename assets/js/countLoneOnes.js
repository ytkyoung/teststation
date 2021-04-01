function countLoneOnes(n) {
  const res = n.toString().match(/(?<!1)(1)(?!1)/g);
  return res === null ? 0 : res.length;
}
const result = countLoneOnes(1111);
console.log(result);

// const countLoneOnes = n => (''+n).replace(/1{2,}|[^1]/g,'').length;

// const countLoneOnes = n => (`${n}`.match(/(?<!1)1(?!1)/g) || []).length;
