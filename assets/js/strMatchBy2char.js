function strMatchBy2char(a, b) {
  const duo = [];
  for (let i = 0; i < a.length - 1; i++) {
    duo.push(a[i] === b[i] && a[i + 1] === b[i + 1]);
  }
  return duo.filter((x) => x).length;
}

const result = strMatchBy2char('jjcAAzz', 'jjBAAz');
console.log(result);




// function strMatchBy2char(a, b) {
//   let res = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a.slice(i, i + 2) === b.slice(i, i + 2) && a.slice(i, i + 2).length === 2)
//     res += 1;
//   }
//   return res;
// }

// function strMatchBy2char(a, b) {
// 	let count = 0;
//   for (let i = 0; i < a.length - 1; i++) {
//     if (a[i] + a[i + 1] === b[i] + b[i + 1]) {
//       ++count;
//     }
//   }
//   return count;
// }


// function strMatchBy2char(a, b) {
// 	if (a.length < 2 || b.length < 2) return 0;
// 	return (a[0] === b[0] && a[1] === b[1]) + strMatchBy2char(a.slice(1), b.slice(1));
// }