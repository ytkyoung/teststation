function numbersNeedFriendsToo(num) {
  return +num
    .toString()
    .match(/(\d)\1*/g)
    .map((x) => (x.length === 1 ? x.repeat(3) : x))
    .join('');
}

const result = numbersNeedFriendsToo(56657);
console.log(result);

// function numbersNeedFriendsToo(num) {
//     num = `${num}`.replace(/(.)(?!\1)/g, "$1,");
//     return +num.split(",").map(n => n.length === 1 ? n + n + n : n).join("");
//   }
