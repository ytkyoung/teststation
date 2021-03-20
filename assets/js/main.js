function simplePair(arr, n) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      console.log(arr[i] * arr[j] === n && arr[i] !== arr[j] ? [arr[i], arr[j]] : 'möp');
    }
  }
}

console.log(simplePair([0, 0, 2, 2], 4));
