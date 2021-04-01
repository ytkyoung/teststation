function mapping(letters) {
  const arr = letters.map((x) => [x, x.toUpperCase()]);
  return Object.fromEntries(new Map([...arr]));
}

const result = mapping(['a', 'b', 'c']);
console.log(result);

// Test.assertSimilar(mapping(["a", "b", "c"]), { a: "A", b: "B", c: "C" })
// Test.assertSimilar(mapping(["p", "s", "t"]), { p: "P", s: "S", t: "T" })
// Test.assertSimilar(mapping(["a", "v", "y", "z"]), { a: "A", v: "V", y: "Y", z: "Z" })


// function mapping(letters) {
// 	return letters.reduce((a, c) => (a[c] = c.toUpperCase(), a), {});
// }