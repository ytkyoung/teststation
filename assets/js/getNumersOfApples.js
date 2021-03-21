function getNumberOfApples(n, p) {
  const res = Math.floor(n - (n * parseFloat(p)) / 100);
  return res >= 1 ? res : `The children didn't get any apples`;
}

const result = getNumberOfApples(25, '10%');
console.log(result);
