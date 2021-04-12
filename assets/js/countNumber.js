const countNumber = (arr) =>
  arr
    .flat(Infinity)
    .map((x) => x.toString())
    .filter((y) => y.match(/\d/g)).length;

const result = countNumber([0, [12, 'biratnagar', [[2]]]]);
console.log(result);
