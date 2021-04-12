function warOfNumbers(arr) {
  const reducer = (a, b) => a + b;
  const even = arr.filter((x) => x % 2).reduce(reducer);
  const odd = arr.filter((x) => !(x % 2)).reduce(reducer);
  if (even > odd) {
    return even - odd;
  }
  return odd - even;
}

const result = warOfNumbers([2, 8, 7, 5]);
console.log(result);

// const warOfNumbers = arr => Math.abs(arr.reduce((a, b) => a + (b%2 ? b : -b), 0));

// function warOfNumbers(arr) {
// 	let [even, odd] = [0,0]
// 	arr.forEach((x,i)=> x%2===0? even+=x: odd+=x)
// 	return Math.abs(odd-even)
// }

// Test.assertEquals(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]), 168)
// Test.assertEquals(warOfNumbers([654, 7, 23, 3, 78, 4, 56, 34]), 793)
// Test.assertEquals(warOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]), 5)
// Test.assertEquals(warOfNumbers([97 ,83, 209, 141, 134, 298, 110, 207, 229, 275, 115, 64, 244, 278]), 228)
// Test.assertEquals(warOfNumbers([332, 92, 35, 315, 109, 168, 320, 230, 63, 323, 16, 204, 105, 17, 226, 157, 245, 44, 223, 136, 93]), 83)
// Test.assertEquals(warOfNumbers([322, 89, 36, 310, 297, 157, 251, 55, 264, 244, 200, 304, 25, 308, 311, 269, 303, 257, 6, 311, 307, 310, 50, 46, 54, 237, 59, 105, 267]), 846)
// Test.assertEquals(warOfNumbers([50, 100, 149, 1, 200, 199, 3, 2]), 0)
