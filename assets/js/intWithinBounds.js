function intWithinBounds(n, lower, upper) {
  return n >= lower && n < upper && Number.isInteger(n);
}
const result = intWithinBounds(3, 1, 9);
console.log(result);

// const intWithinBounds = (n,b,t) => !(n % 1) && n >= b && n < t
