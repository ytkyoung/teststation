function duplicateNums(nums) {
  const res = [];
  const sorted = [...nums].sort();
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i + 1] === sorted[i]) {
      res.push(sorted[i]);
    }
  }
  return res.length > 0 ? res.sort((a, b) => a - b) : null;
}

const result = duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]);
console.log(result);

// const duplicateNums = arr => (
//     arr = [...new Set([...arr.filter(num =>
//         arr.indexOf(num) !== arr.lastIndexOf(num))])].sort((a, b) => a - b),
//         arr.length ? arr : null
//    );

// const duplicateNums = arr => {
//     const filtered = arr.filter((num, i) => i !== arr.indexOf(num));
//     const duplicates = Array.from(new Set(filtered)).sort((a, b) => a - b);

//     return duplicates.length ? duplicates : null;
//   };

// Test.assertSimilar(duplicateNums([1, 2, 3, 4, 3, 5, 6]), [3])
// Test.assertSimilar(duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), null)
// Test.assertSimilar(duplicateNums([20, 30, 40, 30, 20, 40]), [20, 30, 40])
// Test.assertSimilar(duplicateNums([100, 59, 12, 13, 54, 76, 100, 14, 12]), [12, 100])
// Test.assertSimilar(duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]),[72, 81, 99])
// Test.assertSimilar(duplicateNums([11, 22, 33, 44, 55, 44, 33, 22, 11]), [11, 22, 33, 44])
