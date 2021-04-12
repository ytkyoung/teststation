function isDisarium(n) {
  return (
    n
      .toString()
      .split('')
      .map((x, i) => (+x) ** (i + 1))
      .reduce((a, b) => a + b) === n
  );
}

const result = isDisarium(135);
console.log(result);
