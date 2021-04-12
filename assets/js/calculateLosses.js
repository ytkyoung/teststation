function calculateLosses(obj) {
  return Object.keys(obj).reduce((acc, value) => acc + obj[value], 0) || 'Lucky you!';
}

const stolenItems = {
  tv: 30,
  skate: 20,
  stereo: 50,
};
const result = calculateLosses(stolenItems);
console.log(result);

// const sum = arr => arr.reduce((total, num) => total + num, 0);

// const calculateLosses = obj => {
// 	const values = Object.values(obj)
// 	if (!values.length) return 'Lucky you!';
// 	return sum(values);
// }
