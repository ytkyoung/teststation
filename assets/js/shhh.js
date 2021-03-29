function shhh(sentence) {
  const low = sentence.toLowerCase();
  return `"${low.charAt(0).toUpperCase() + low.slice(1)}", whispered Edabit.`;
}

const result = shhh("tHaT'S Pretty awesOme");
console.log(result);

// Test.assertEquals(shhh("HI THERE!"), "\"Hi there!\", whispered Edabit.")
// Test.assertEquals(shhh("cool cool cool"), "\"Cool cool cool\", whispered Edabit.")
// Test.assertEquals(shhh("YEAH yeah YEAH yeah"), "\"Yeah yeah yeah yeah\", whispered Edabit.")
// Test.assertEquals(shhh(""), "\"\", whispered Edabit.")
