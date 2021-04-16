function isTriplet(n1, n2, n3) {
  const sort = [n1, n2, n3].sort((a, b) => a - b);
  const [n11, n22, n33] = sort;
  return n11 ** 2 + n22 ** 2 === n33 ** 2;
}

const result = isTriplet(8, 17, 15);
console.log(result);


// const isTriplet = (a,b,c) => {
// 	[a,b,c] = [a,b,c].sort((x,y) => x-y)
// 	return a ** 2 + b ** 2 == c ** 2
// }

// function isTriplet(n1, n2, n3) {
// 	return n1**2+n2**2+n3**2==2*Math.max(n1,n2,n3)**2
// }