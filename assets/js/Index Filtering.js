const indexFilter = (idx, str) => idx.map((x) => (x >= 0 ? str[x].toLowerCase() : str[str.length + x])).join('');

const result = indexFilter([7, -1, 5, 1], 'She is the love of my love');
console.log(result);
