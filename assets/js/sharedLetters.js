function sharedLetters(str1, str2) {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[j] === str2[i]) {
        count += 1;
      }
    }
  }
  return count;
}

const result = sharedLetters('apple', 'meaty');
console.log(result);

// function sharedLetters(str1, str2) {
// 	return [...str2].filter(e => str1.includes(e)).length;
// }

// Test.assertEquals(sharedLetters("apple", "meaty"), 2)
// Test.assertEquals(sharedLetters("fan", "forsook"), 1)
// Test.assertEquals(sharedLetters("spout", "shout"), 4)
// Test.assertEquals(sharedLetters("took", "taken"), 2)
// Test.assertEquals(sharedLetters("mentor", "terminal"), 5)
// Test.assertEquals(sharedLetters("class", "last"), 3)
