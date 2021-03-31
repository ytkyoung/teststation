function verbify(str) {
  const firstWord = str.split(' ')[0];
  const secondWord = str.split(' ')[1];

  if (firstWord.match(/ed$/g)) {
    return `${firstWord} ${secondWord}`;
  }
  if (firstWord.match(/e$/g)) {
    return `${firstWord}d ${secondWord}`;
  }
  return `${firstWord}ed ${secondWord}`;
}

const result = verbify('cheese burger');
console.log(result);

// Test.assertEquals(verbify("cheese burger"), "cheesed burger")
// Test.assertEquals(verbify("bean toast"), "beaned toast")
// Test.assertEquals(verbify("orange juice"), "oranged juice")
// Test.assertEquals(verbify("verb noun"), "verbed noun")
// Test.assertEquals(verbify("apple sauce"), "appled sauce")
// Test.assertEquals(verbify("girl friend"), "girled friend")
// Test.assertEquals(verbify("shredded cheese"), "shredded cheese")
// Test.assertEquals(verbify("cheese cake"), "cheesed cake")
// Test.assertEquals(verbify("lemon cheesecake"), "lemoned cheesecake")
// Test.assertEquals(verbify("air plane"), "aired plane")
// Test.assertEquals(verbify("pumpkin pie"), "pumpkined pie")
// Test.assertEquals(verbify("salt water"), "salted water")

// const verbify = str => str.replace(/^(.*?)(e|ed)? /, "$1ed ");

// const verbify = str => str.replace(/e?d? /, 'ed ');
