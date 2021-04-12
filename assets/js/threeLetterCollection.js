function threeLetterCollection(s) {
  const res = [];
  for (let i = 0; i < s.length - 2; i++) {
    res.push([s[i], s[i + 1], s[i + 2]].join(''));
  }
  return res.sort();
}

const result = threeLetterCollection('edabit');
console.log(result);

// const threeLetterCollection = s => [...s]
// 	.map((x, i) => x = s.slice(i, i + 3)).filter(x => x.length === 3).sort()

// Test.assertSimilar(threeLetterCollection('slap'), ['lap', 'sla'])
// Test.assertSimilar(threeLetterCollection('click'), ['cli', 'ick', 'lic'])
// Test.assertSimilar(threeLetterCollection('cat'), ['cat'])
// Test.assertSimilar(threeLetterCollection('hi'), [])
// Test.assertSimilar(threeLetterCollection('e'), [])
// Test.assertSimilar(threeLetterCollection(''), [])
// Test.assertSimilar(threeLetterCollection('programming'), ['amm', 'gra', 'ing', 'min', 'mmi', 'ogr', 'pro', 'ram', 'rog'])
// Test.assertSimilar(threeLetterCollection('antidisestablishmentarianism'), ['abl', 'ani', 'ant', 'ari', 'bli', 'dis', 'ent', 'est', 'hme', 'ian', 'idi', 'ise', 'ish', 'ism', 'lis', 'men', 'nis', 'nta', 'nti', 'ria', 'ses', 'shm', 'sta', 'tab', 'tar', 'tid'])
// Test.assertSimilar(threeLetterCollection('zoology'), ['log', 'ogy', 'olo', 'ool', 'zoo'])
// Test.assertSimilar(threeLetterCollection('assassination'), ['ass', 'ass', 'ati', 'ina', 'ion', 'nat', 'sas', 'sin', 'ssa', 'ssi', 'tio'])
// Test.assertSimilar(threeLetterCollection('bookkeeper'), ['boo', 'eep', 'epe', 'kee', 'kke', 'okk', 'ook', 'per'])
