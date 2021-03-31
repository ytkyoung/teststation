function sumArray(arr) {
	return arr.flat(Infinity).reduce((a, b) => a + b)
}

const result = sumArray([1, [2, [1]], 3]);
console.log(result);


// Test.assertEquals(sumArray([1, 2, 3]), 6)
// Test.assertEquals(sumArray([1, [1, 2], [3, 1]]), 8)
// Test.assertEquals(sumArray([[1, 1], [2, 8], 8]), 20)
// Test.assertEquals(sumArray([1, 2]), 3)
// Test.assertEquals(sumArray([1, [2, [1]], 3]), 7)


// const sumArray = arr =>
//   arr.reduce((a, v) => a + (typeof v === 'object'? sumArray(v) : v), 0)
