const paths = (n) => Array.from({ length: n }, (_, i) => i + 1).reduce((a, c) => a * c);

const result = paths(4);
console.log(result);

// const paths = n => !n || n * paths(--n);

// Test.assertEquals(paths(1), 1)
// Test.assertEquals(paths(2), 2)
// Test.assertEquals(paths(3), 6)
// Test.assertEquals(paths(4), 24)
// Test.assertEquals(paths(5), 120)
// Test.assertEquals(paths(6), 720)
// Test.assertEquals(paths(7), 5040)
// Test.assertEquals(paths(8), 40320)
