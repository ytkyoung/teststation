function makePlusFunction(baseNum) {
  return function (y) {
    return baseNum + y;
  };
}
const plusTwo = makePlusFunction(2);
const plusFive = makePlusFunction(5);
const plusSeven = makePlusFunction(plusTwo(plusFive(0)));
const plusTen = makePlusFunction(10);

console.log(plusTwo(0), 2);
console.log(plusTwo(18), 20);
console.log(plusTwo(-1), 1);
console.log(plusFive(0), 5);
console.log(plusFive(12), 17);
console.log(plusFive(-5), 0);
console.log(plusSeven(0), 7);
console.log(plusSeven(41), 48);
console.log(plusSeven(-117), -110);
console.log(plusTen(0), 10);
console.log(plusTen(1), 11);
console.log(plusTen(-1), 9);
console.log(plusTwo(plusFive(plusSeven(plusTen(1)))), 25);

console.log(makePlusFunction(8)(8), 16);
console.log(makePlusFunction(1)(100), 101);
console.log(makePlusFunction(-100)(0), -100);
console.log(makePlusFunction(0)(0), 0);

// const makePlusFunction = baseNum => num => baseNum + num;
