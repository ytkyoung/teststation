function challenge1(s) {
  return s.slice(0, 5);
}

function challenge2(s) {
  return s.match(/.{5}$/g)[0];
}

function challenge3(s) {
  return [...s].reverse().join('');
}

function challenge4(s) {
  return s.slice(0, 6).split('').reverse().join('');
}

function challenge5(s) {
  return s
    .match(/.{7}$/g)[0]
    .split('')
    .filter((_, i) => !(i % 2))
    .join('');
}

const result = challenge5('abcdefghijklmnopqrstuvwxyz');
console.log(result);
