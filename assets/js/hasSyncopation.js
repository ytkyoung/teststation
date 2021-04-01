function hasSyncopation(s) {
  const res = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '#' && i % 2 !== 0) {
      res.push(true);
    }
  }
  return res.length >= 1;
}

const result = hasSyncopation('#.#.###.');
console.log(result);

// const hasSyncopation = s => [...s].some((i, idx) => idx%2 && i === '#');

// const hasSyncopation = str =>
// 	Array.from(str).filter((_, i) => i % 2).some(char => char === '#');
