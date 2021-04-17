function evenlyDivisible(a, b, c) {
  const range = [];
  for (let i = 0; i < Math.abs(a - b) + 1; i++) {
    range.push(i + a);
  }
  const divi = range.filter((x) => !(x % c));
  return divi.length > 0 ? divi.reduce((acc, curr) => acc + curr) : 0;
}

const result = evenlyDivisible(1, 10, 20);
console.log(result);

// function evenlyDivisible(a, b, c) {
//     let sum = 0;
//     for (let i = a; i <= b; i++) if (i % c === 0) sum += i;
//     return sum;
//   }

// function evenlyDivisible(a, b, c) {
// 	return [...Array(b-a+1)].map((_,i)=>i+a).filter(i=>i%c==0).reduce((x,y)=>x+y,0)
// }

// function evenlyDivisible(a, b, c) {
//     let sum = 0;
//     while (a <= b) {
//       sum += !(a % c) ? a : 0;
//           a++;
//     }
//     return sum;
//   }
