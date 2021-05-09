const pluralize = arr => [
  ...new Set(
    arr.map((x, i) => (arr.lastIndexOf(x) !== arr.indexOf(x) ? x + 's' : x))
  )
]

const result = pluralize(['cow', 'pig', 'cow', 'cow', 'pig', 'frog'])
console.log(result)
const resultAnzeige = (document.getElementById('demo').innerHTML = result)

// function pluralize(arr) {
// 	const words = arr.reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), {});
// 	return Object.keys(words).map(w => words[w] > 1 ? w + "s" : w);
// }

// const pluralize = arr => (
//   many = arr.filter(x => arr.indexOf(x) !== arr.lastIndexOf(x)),
//   single = arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x)),

//   many.length ? [...new Set(many.map(x => x + 's'))].concat(single) : single
// )
