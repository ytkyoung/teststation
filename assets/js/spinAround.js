function spinAround(r) {
  let rounds = 0;
  r.map((x) => (x.match(/r/g) ? (rounds += 90) : (rounds -= 90)));
  return Math.abs(Math.round(rounds / 360));
}
const result = spinAround(['right', 'right', 'right', 'right', 'left', 'right']);
console.log(result);

// const spinAround = r => {
// 	return Math.abs(Math.round(r.reduce((a, b) => a + (b == 'right' ? 1 : -1), 0)/4))
// }

// function spinAround(r) {
// 	return Math.abs(r.reduce((a, c) => a + (-1) ** c.length, 0)) / 4 | 0;
// }
