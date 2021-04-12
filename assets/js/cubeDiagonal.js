function cubeDiagonal(volume) {
  return +(Math.cbrt(volume) * Math.sqrt(3)).toFixed(2);
}

const result = cubeDiagonal(343);
console.log(result);

// Test.assertEquals(cubeDiagonal(8), 3.46)
// Test.assertEquals(cubeDiagonal(343), 12.12)
// Test.assertEquals(cubeDiagonal(1157.625), 18.19)
// Test.assertEquals(cubeDiagonal(12), 3.97)
// Test.assertEquals(cubeDiagonal(1), 1.73)
// Test.assertEquals(cubeDiagonal(48), 6.29)
// Test.assertEquals(cubeDiagonal(1728), 20.78)
