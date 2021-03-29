function timeToFinish(full, part) {
  const countFull = full.length > 0 ? full.match(/\S/gi).length : 0;
  const countPart = part.length > 0 ? part.match(/\S/gi).length : 0;
  return (countFull - countPart) * 0.5;
}

const result = timeToFinish('What? Who? Where? Why? I pondered these things upon reading the first question.', '');
console.log(result);

// timeToFinish(
//     "And so brings my conclusion to its conclusion.",
//     "And so brings my conclusion to its conclus"
//   ) ➞ 2

//   timeToFinish(
//     "As a result, my point is still valid.",
//     "As a result, my"
//   ) ➞ 9

//   timeToFinish(
//     "Thank you for reading my essay.",
//     "T"
//   ) ➞ 12.5

// function timeToFinish(full, part) {
// 	return full.replace(part, '').replace(/\s/g, '').length * .5
// }

// const timeToFinish = (full, part) => {
// 	return full
// 		.slice(part.length)
// 		.replace(/\s/g, '')
// 		.length / 2;
// }
