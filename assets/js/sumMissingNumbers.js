function sumMissingNumbers (arr) {
  const missing = []
  const maxNum = Math.max(...arr)
  const minNum = Math.min(...arr)
  const range = [...Array(maxNum - minNum + 1)].map((_, i) => minNum + i)

  if (range.length === arr.length) {
    return 0
  }

  for (let i = 0; i < range.length; i++) {
    if (arr.indexOf(range[i]) === -1) {
      missing.push(range[i])
    }
  }

  return missing.reduce((a, c) => a + c)
}

const result = sumMissingNumbers([17, 16, 15, 10, 11, 12])

console.log(result)
const resultAnzeige = (document.getElementById('demo').innerHTML = result)

// function sumMissingNumbers(arr) {
//   const [a, b] = [Math.min(...arr), Math.max(...arr)];
// 	return arr.reduce((a, c) => a - c, (a + b) * (b - a + 1) / 2);
// }

// function sumMissingNumbers(arr){
//   let res = 0
//   for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//     if(!arr.includes(i))res+=i
//   }
//   return res
//  }

// const sum = arr => arr.reduce((total, num) => total + num, 0);

// const sumMissingNumbers = arr => (
// 	min = Math.min(...arr),
// 	len = Math.max(...arr) - min + 1,
// 	sum(Array.from({length: len}, (_, i) =>  i + min)) - sum(arr)
// );

// function sumMissingNumbers(arr){

// 	var total = 0;

// 	var floor = Math.min(...arr);
// 	var value = floor;
// 	var ceiling = Math.max(...arr);

// 	while (value <= ceiling)
// 		{
// 			if (arr.includes(value))
// 				{value += 1;}
// 			else
// 				{total += value; value += 1;}
// 		}

// 	return total;

// }
