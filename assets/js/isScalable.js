function isScalable(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] <= 5) {
      res.push(true);
    }
  }
  return res.length + 1 === arr.length;
}

const result = isScalable([40, 45, 50, 45, 47, 52]);
console.log(result);


// Test.assertEquals(isScalable([1, 2, 4, 6, 7, 8]), true)
// Test.assertEquals(isScalable([40, 45, 50, 48, 47, 52]), true)
// Test.assertEquals(isScalable([2, 9, 11, 10, 18, 21]), false)
// Test.assertEquals(isScalable([200, 200, 200, 200]), true)
// Test.assertEquals(isScalable([30, 29, 24, 19, 16, 11]), true)
// Test.assertEquals(isScalable([22, 22, 22, 29, 29, 29, 29]), false)