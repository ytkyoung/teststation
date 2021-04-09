function mergeSort(arr1, arr2) {
  let direction;
  const directionArr = [];
  for (let i = 0; i < arr1.length - 1; i++) {
    directionArr.push(arr1[i] < arr1[i + 1]);
  }
  directionArr.every((x) => (x ? (direction = 'up') : (direction = 'down')));
  if (direction === 'down') {
    return arr1.concat(arr2).sort((a, b) => b - a);
  }
  return arr1.concat(arr2).sort((a, b) => a - b);
}

const result = mergeSort([120, 180, 200], [190, 175, 130]);
console.log(result);

// Test.assertSimilar(mergeSort([1, 2, 3], [5, 4, 6]), [1, 2, 3, 4, 5, 6])
// Test.assertSimilar(mergeSort([8, 6, 4, 2], [-2, -6,  0, -4 ]), [8, 6, 4, 2, 0, -2, -4, -6])
// Test.assertSimilar(mergeSort([120, 180, 200], [190, 175, 130]), [120, 130, 175, 180, 190, 200])
// Test.assertSimilar(mergeSort([25, 21, 17, 13], []), [25, 21, 17, 13])
// Test.assertSimilar(mergeSort([1024, 2048], [512, 128, 64]), [64, 128, 512, 1024, 2048])
// Test.assertSimilar(mergeSort([0, 1], [1, 1, 1, 1, 0, 0, 0, 0]), [0, 0, 0, 0, 0, 1, 1, 1, 1, 1])
// Test.assertSimilar(mergeSort([-1, -3], [11, -5, 7, -11]), [11, 7, -1, -3, -5, -11])
// Test.assertSimilar(mergeSort([10, 20, 30, 40, 50, 60, 80, 90], [70]), [10, 20, 30, 40, 50, 60, 70, 80, 90])
