function isAlpha(word) {
  return (
    word
      .toLowerCase()
      .match(/\w/g)
      .map((x) => x.charCodeAt(word) - 96)
      .reduce((a, b) => a + b) %
      2 ===
    0
  );
}
const result = isAlpha('True');
console.log(result);

// function isAlpha(word) {
//     return word.match(/[a-z]/g).reduce((a, b) => a + b.charCodeAt() - 96, 0)%2 === 0;
// }

// const isAlpha = str => {
//     const aCharCode = 'a'.charCodeAt(0);
//     const letters = str.toLowerCase().replace(/[^a-z]/g, '');
//     const sum = Array.from(letters).reduce(
//       (total, char) => total + (char.charCodeAt(0) - aCharCode + 1),
//       0,
//     );

//     return sum % 2 === 0;
//   };

// Test.assertEquals(isAlpha("i'am king"), true)
// Test.assertEquals(isAlpha("True"), true)
// Test.assertEquals(isAlpha("alexa"), false)
