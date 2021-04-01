function removeEnemies(names, enemies) {
  return names.filter((x) => !enemies.includes(x));
}

const result = removeEnemies(['Adam', 'Emmy', 'Tanya', 'Emmy'], ['Emmy']);
console.log(result);

// Test.assertSimilar(removeEnemies(["Steve", "Eleanor"], []), ["Steve", "Eleanor"])
// Test.assertSimilar(removeEnemies(["Jeff", "Charlie", "James", "Fredrick"], ["James", "Jeff"]), ["Charlie", "Fredrick"])
// Test.assertSimilar(removeEnemies(["Amelia", "Max", "Isobel", "Alex", "Phil"], ["Phil", "Max"]), ["Amelia", "Isobel", "Alex"])
// Test.assertSimilar(removeEnemies(["John", "Skye", "Alexander", "Skye", "Tony"], ["Skye", "John"]), ["Alexander", "Tony"])
