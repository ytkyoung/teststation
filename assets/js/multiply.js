function multiply(n1, n2) {
  let sum = 0;

  for (let i = 0; i < Math.abs(n2); i++) {
    sum += Math.abs(n1);
  }
  if (n1 < 0 && n2 < 0) {
    return sum;
  }
  if (n1 < 0 || n2 < 0) {
    return -sum;
  }

  return sum;
}

const result = multiply(-2, 4);
console.log(result);
