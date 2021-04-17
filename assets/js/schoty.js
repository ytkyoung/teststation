const schoty = (frame) => +frame.map((x) => x.split('---')[0].replace(/^O*/g, (y) => y.length)).join('');

const result = schoty([
  'OO---OOOOOOOO',
  'O---OOOOOOOOO',
  'OOOOO---OOOOO',
  '---OOOOOOOOOO',
  '---OOOOOOOOOO',
  '---OOOOOOOOOO',
  '---OOOOOOOOOO',
]);

console.log(result);

// const schoty = frame => Number(frame.map(wire => wire.indexOf('-')).join(''));

// const schoty = frame =>
// 	+frame.reduce((a, b) => a + b.replace(/-+|O+$/g, '').length, '')
// ;

// const schoty = f => +f.reduce((r, s) => r + s.indexOf('-'), '');
