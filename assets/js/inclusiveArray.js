const inclusiveArray = (startNum, endNum) =>
  endNum - startNum <= 0 ? [startNum] : Array.from({ length: endNum - startNum + 1 }, (_, i) => i + startNum);

const result = inclusiveArray(1, 5);

console.log(result);
