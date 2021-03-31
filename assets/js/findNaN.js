function findNaN(number) {
  return number.map((x) => (!Number.isNaN(x) ? 'x' : 'y'), -1).indexOf('y');
}

const result = findNaN([1, 2, 3]);
console.log(result);

// const findNaN = arr => arr.findIndex(isNaN);
