function isObject(value) {
  return typeof value === 'object' && value !== null;
}

const result = isObject(function add(x, y) {
  return x + y;
});
console.log(result);

// Test.assertEquals(isObject(new Date()), true)
// Test.assertEquals(isObject("12/12/2011"), false)
// Test.assertEquals(isObject(null), false)
// Test.assertEquals(isObject([1,2,3]), true)
// Test.assertEquals(isObject({}), true)

// function isObject(value) {
// 	return value instanceof Object;
// }

// function isObject(val) {
//     return val !== null && ['object', 'function'].includes(typeof val);
// }
