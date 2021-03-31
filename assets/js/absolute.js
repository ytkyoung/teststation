function absolute(str) {
  const res = str.replace(/a\b/gi, 'an absolute');
  return res.charAt(0).toUpperCase() + res.slice(1);
}

const result = absolute('I am a champion!!!');
console.log(result);

// const testData = `Test.assertEquals(absolute("I am a champion!!!"), "I am an absolute champion!!!")
// Test.assertEquals(absolute("Such an amazing bowler."), "Such an amazing bowler.")
// Test.assertEquals(absolute("A hero of the leaf"), "An absolute hero of the leaf")
// Test.assertEquals(absolute("That place is such a beauty"), "That place is such an absolute beauty")
// Test.assertEquals(absolute("A man with no haters."), "An absolute man with no haters.")`;

// function absolute(str) {
// 	return str.replace(/(a)\s/gi, `$1n absolute `)
// }

// const absolute = str => str.replace(/\ba\b/gi, "$&n absolute");
