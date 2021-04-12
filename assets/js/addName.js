function addName(obj, name, value) {
  obj[name] = value;
  return { ...obj };
}

const result = addName({ piano: 500, stereo: 300 }, 'Caligula', 440);
console.log(result);

// function addName (obj, name, value) {
// 	return {...obj, [name]: value}
// };

// function addName (obj, name, value) {
//     obj[name] = value;
//     return obj;
//   };

// Test.assertSimilar(addName({}, "Brutus", 300), {Brutus: 300})
// Test.assertSimilar(addName({piano: 500}, "Brutus", 400), {piano: 500, Brutus: 400})
// Test.assertSimilar(addName({piano: 500, stereo: 300}, "Caligula", 440), {piano: 500,  stereo: 300, Caligula: 440})
