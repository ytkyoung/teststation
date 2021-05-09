function sumOfMissingNums (arr) {
  const numberArr = arr.filter(x => x.match(/\d+/g))
  const maxNum = Math.max(...numberArr)
  const minNum = Math.min(...numberArr)
  const range = [...Array(maxNum - minNum + 1)].map((_, i) => minNum + i)

  return range.length - numberArr.length
}

const result = sumOfMissingNums(['1', '78', 'B', '9', 'z'])

console.log(result)
const resultAnzeige = (document.getElementById('demo').innerHTML = result)

// function sumOfMissingNums(arr) {
// 	const numbers = arr.filter(v => !isNaN(v));
// 	return Math.max(...numbers) - Math.min(...numbers) + 1 - numbers.length;
// }

// function sumOfMissingNums(arr) {
// 	return Array(arr.filter(x=>Number.isInteger(+x)).map(x=>+x).sort((a,b)=>a-b).slice(-1)[0]-arr.filter(x=>Number.isInteger(+x)).map(x=>+x).sort((a,b)=>a-b)[0]+1).fill().map((_,idx)=>arr.filter(x=>Number.isInteger(+x)).map(x=>+x).sort((a,b)=>a-b)[0]+idx).length-arr.filter(x=>Number.isInteger(+x)).map(x=>+x).sort((a,b)=>a-b).length
// }

// function sumOfMissingNums(arr) {
// 	let nums = arr.filter(x => /\d/.test(x)).map(x => +x).sort((a, b) => a - b),
// 			len = nums.length;
// 	return nums[len-1] - nums[0] + 1 - len;
// }

// const sumOfMissingNums = arr => {
//   const nums = arr
//     .map(Number)
//     .filter(Boolean)
//     .sort((a, b) => a - b);

//   return nums
//     .slice(1)
//     .reduce((total, curr, i) => total + (curr - nums[i] - 1), 0);
// };
