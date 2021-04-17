function totalSales(sales, product) {
  if (!sales[0].join('').includes(product)) {
    return 'Product not found';
  }

  const ind = sales[0].indexOf(product);
  let sum = 0;
  for (let i = 1; i < sales.length; i++) {
    for (let j = 0; j < sales[i].length; j++) {
      sum += sales[i][ind];
    }
  }
  return sum / sales[0].length;
}

const result = totalSales(
  [
    ['A', 'B', 'C'],
    [2, 7, 1],
    [3, 6, 6],
    [4, 5, 5],
  ],
  'B'
);

console.log(result);

// function totalSales(sales, product) {
//   if (!sales[0].join('').includes(product)) {
//     return 'Product not found';
//   }

//   const ind = [];
//   sales[0].map((x, i) => (x === product ? ind.push(i) : ''));

//   console.log(ind);
//   return [...sales]
//     .map((x) => x[ind])
//     .reduce((a, c) => a + (c.toString().match(/\d/g) ? c : ''), '')
//     .split('')
//     .reduce((a, c) => +a + +c);
// }
