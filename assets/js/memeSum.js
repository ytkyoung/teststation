function memeSum(a, b) {
  const arrNum1 = `${a}`.split('').map((x) => +x);
  const arrNum2 = `${b}`.split('').map((x) => +x);

  let dif;
  let kleiner;
  let greater;

  if (arrNum1.length > arrNum2.length) {
    dif = arrNum1.length - arrNum2.length;
    kleiner = arrNum2;
    greater = arrNum1;
  } else {
    dif = arrNum2.length - arrNum1.length;
    kleiner = arrNum1;
    greater = arrNum2;
  }

  const zeros = '0'
    .repeat(dif)
    .split('')
    .concat(kleiner)
    .map((x) => +x);

  return +greater.map((x, i) => x + zeros[i]).join('');
}

const result = memeSum(122, 81);
console.log(result);

// const memeSum = (a, b) =>{
// 	let [first,second] = [String(a),String(b)];
// 	const max = Math.max(first.length,second.length);
// 	first = `${"0".repeat(max - first.length) + first}`, second = `${"0".repeat(max - second.length) + second}`;
// 	return +[...first].map((v,i) => String( +v + +second[i])).join("");
// };

// function memeSum(a, b) {
//   let l = Math.max(String(a).length, String(b).length)
//   a = String(a).padStart(l,"0")
//   b = String(b).padStart(l,"0")
//   let ans =''
//   for (let i = 0; i < l; i++) { ans+=(Number(a.charAt(i)) + Number(b.charAt(i)))
//   }
//   return Number(ans)
// }
