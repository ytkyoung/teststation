function isCentral(str) {
  return (
    str
      .split(/\S/g)
      .map((x) => x.length)
      .reduce((a, b) => a - b) === 0
  );
}
const result = isCentral('  #  ');
console.log(result);
