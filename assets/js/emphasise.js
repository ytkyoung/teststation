const emphasise = (str) =>
  str.length === 0
    ? ''
    : str
        .split(/\s/g)
        .map((x) => x[0].toUpperCase() + x.slice(1).toLowerCase())
        .join(' ');

const result = emphasise('Goo dmasd');

console.log(result);


// function emphasise(str) {
// 	return str.toLowerCase().replace(/\b./g, m => m.toUpperCase());
// }