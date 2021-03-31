function zipIt(women, men) {
  const res = [];
  if (women.length !== men.length) {
    return `sizes don't match`;
  }
  for (let i = 0; i < women.length; i++) {
    res.push([women[i], men[i]]);
  }
  return res;
}

const result = zipIt(['Elise', 'Mary'], ['John', 'Rick']);
console.log(result);

// Test.assertSimilar(zipIt(["Elise", "Mary"], ["John", "Rick"]), [["Elise", "John"], ["Mary", "Rick"]]);
// Test.assertSimilar(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]), "sizes don't match");
// Test.assertSimilar(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]), [["Ana", "Bob"], ["Amy", "Josh"], ["Lisa", "Tim"]]);
// Test.assertSimilar(zipIt(["Ana", "Amy", "Lisa", "Katty"], ["Bob", "Josh", "Tim"]), "sizes don't match");
// Test.assertSimilar(zipIt(["Katty", "Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim", "Aaron"]), [["Katty", "Bob"], ["Ana", "Josh"], ["Amy", "Tim"], ["Lisa", "Aaron"]]);
