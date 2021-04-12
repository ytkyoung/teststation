function weight(r, h) {
  return +(Math.PI * r ** 2 * h * 0.001).toFixed(2);
}

const result = weight(4, 10);
console.log(result);
