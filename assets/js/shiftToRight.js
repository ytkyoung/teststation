function shiftToRight(x, y) {
  return Math.floor(x / 2 ** y);
}

const result = shiftToRight(4666, 6);
console.log(result);

// shiftToRight(80, 3) ➞ 10

// shiftToRight(-24, 2) ➞ -6

// shiftToRight(-5, 1) ➞ -3

// shiftToRight(4666, 6) ➞ 72

// shiftToRight(3777, 6) ➞ 59

// shiftToRight(-512, 10) ➞ -1
