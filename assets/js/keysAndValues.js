function keysAndValues(obj) {
  return [Object.keys(obj), Object.values(obj)];
}

const result = keysAndValues({ a: 1, b: 2, c: 3 });
console.log(result);

// Test.assertSimilar(keysAndValues({a: 1, b: 2, c: 3}), [["a", "b", "c"], [1, 2, 3]])
// Test.assertSimilar(keysAndValues({a: "Apple", b: "Microsoft", c: "Google"}), [["a", "b", "c"], ["Apple", "Microsoft", "Google"]])
// Test.assertSimilar(keysAndValues({key1: true, key2: false, key3: undefined}), [["key1", "key2", "key3"], [true, false, undefined]])
// Test.assertSimilar(keysAndValues({1: null, 2: null, 3: null}), [["1", "2", "3"], [null, null, null]])
// Test.assertSimilar(keysAndValues({key1: "cat", key2: "dog", key3: null}), [["key1", "key2", "key3"], ["cat", "dog", null]])
