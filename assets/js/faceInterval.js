function faceInterval(num) {
  if (typeof num === 'string') {
    return ':/';
  }
  const minMax = Math.max(...num) - Math.min(...num);
  return num.filter((x) => x === minMax).length > 0 ? ':)' : ':(';
}

const result1 = faceInterval([1, 2, 5, 8, 3, 9]);
console.log(result1);
