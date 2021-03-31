function jazzify(arr) {
  return arr.map((x) => (x.match(/(7)$/g) ? x : `${x}7`));
}
const result = jazzify(['G7', 'F', 'C']);
console.log(result);

// Test.assertSimilar(jazzify(['G', 'F', 'C']), ['G7', 'F7', 'C7'])
// Test.assertSimilar(jazzify(['Dm', 'G', 'E', 'A']), ['Dm7', 'G7', 'E7', 'A7'])
// Test.assertSimilar(jazzify(['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7']), ['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7'])
// Test.assertSimilar(jazzify(['G', 'C7']), ['G7', 'C7'])
// Test.assertSimilar(jazzify([]), [])
