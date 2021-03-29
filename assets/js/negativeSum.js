const negativeSum = (chars) => chars.match(/-(?=\d)\d*/g).reduce((a, c) => +a + +c);

const result = negativeSum('22 13%14&-11-22 13 12');
console.log(result);
