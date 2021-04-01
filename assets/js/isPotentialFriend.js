function isPotentialFriend(set1, set2) {
  if (set1.length === 1 && set2.length === 1 && set1[0] === set2[0]) {
    return true;
  }
  return set1.length + set2.length - [...new Set(set1.concat(set2))].length > 1;
}

const result = isPotentialFriend(['drawing'], ['drawing']);
console.log(result);

// function is_potential_friend(s1, s2) {
// 	let f = s1.filter(v => s2.includes(v));
// 	return f.length >= 2 || f.length === s2.length;
// }

// const is_potential_friend = (arr1, arr2) => {
//   const matches = arr1.reduce(
//     (total, interest) => total + arr2.includes(interest),
//     0,
//   );
//   return (matches === arr1.length && matches === arr2.length) || matches >= 2;
// };

// const isPotentialFriend = (a, b) => {
//   let [x, y, k] = [a.length, b.length,
//        a.reduce((v, k) => v + b.includes(k), 0)]
//   return x == y && x == k || x + y > 2 && k >= 2
// }
