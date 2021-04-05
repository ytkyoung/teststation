function lineLength([x1, y1], [x2, y2]) {
  return +Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2).toFixed(2);
}

const result = lineLength([15, 7], [22, 11]);

console.log(result);

// Test.assertEquals(lineLength([15, 7], [22, 11]), 8.06)
// Test.assertEquals(lineLength([0, 0], [0, 0]), 0)
// Test.assertEquals(lineLength([0, 0], [1, 1]), 1.41)
// Test.assertEquals(lineLength([30, 10], [13, -5]), 22.67)

// function lineLength([x1, y1], [x2, y2]) {
// 	return +Math.hypot(x1 - x2, y1 - y2).toFixed(2);
// }
