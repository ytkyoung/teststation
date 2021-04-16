function sockMerchant(arr) {
  arr.sort((a, b) => a - b);

  let counter = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      counter += 1;
      i += 1;
    }
  }
  return counter;
}

const result1 = sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log(result1);
