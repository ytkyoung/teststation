function mumbling(str) {
  return [...str]
    .map((x, i) => x.repeat(i + 1).toLowerCase())
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join('-');
}
const result = mumbling('EdaBit');
console.log(result);

// function mumbling(str) {
// 	return [...str.toLowerCase()]
// 		.map((l, i) => l.toUpperCase() + l.repeat(i))
// 		.join('-');
// }
