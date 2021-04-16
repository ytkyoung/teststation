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

// const isDisarium = n => [...n+''].reduce((a,b,i) => a + (+b)**(i+1), 0) == n

// const isDisarium = n =>
// 	[...String(n)].reduce((a, b, i) => a + b ** (i + 1), 0) === n

// function isDisarium(n) {
// 	return [...n + ""].reduce((a, c, i) => a + c ** (i + 1), 0) === n;
// }
