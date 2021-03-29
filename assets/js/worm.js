function wormLength(worm) {
  return worm.match(/-/g).length !== 0 ? `${worm.length * 10} mm.` : 'invalid';
}
const result = wormLength('----------');
console.log(result);

// Test.assertEquals(wormLength("----------"), "100 mm.")
// Test.assertEquals(wormLength(""), "invalid")
// Test.assertEquals(wormLength("---_-___---_"), "invalid")
// Test.assertEquals(wormLength("------"), "60 mm.")
// Test.assertEquals(wormLength("iwheguawhpvpaiehpiuwwega"), "invalid")
// Test.assertEquals(wormLength("QWERTYUIOPASDFGHJKL"), "invalid")
// Test.assertEquals(wormLength("------------"), "120 mm.")
