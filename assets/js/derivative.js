function derivative(b, m) {
  return b * m ** (b - 1);
}

const result = derivative(3, -2);
console.log(result);

// Test.assertEquals(derivative(1, 4), 1)
// Test.assertEquals(derivative(3, -2), 12)
// Test.assertEquals(derivative(4, -3), -108)
// Test.assertEquals(derivative(9, -5), 3515625)
// Test.assertEquals(derivative(1254, 0), 0)
// Test.assertEquals(derivative(-2, 10), -0.002)
