function likeOrDislike(arr) {
  if (arr.length <= 0) {
    return 'Nothing';
  }
  const last = arr
    .map((x) => x[0])
    .join('')
    .match(/(\w)\1+$|\w$/g)[0];

  if (last.length % 2) {
    if (last[0] === 'L') {
      return 'Like';
    }
    return 'Dislike';
  }
  return 'Nothing';
}

const result = likeOrDislike(['Like', 'Dislike', 'Dislike']);
console.log(result);

// const likeOrDislike = arr => (
// 	arr.reduce((a, e) => (a === e) ? 'Nothing' : e, 'Nothing')
// );

// const likeOrDislike = arr => {
// 	let current = "Nothing";

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === current) current = 'Nothing';
// 		else current = arr[i];
// 	}
// 	return current;
// }

// class TinyStateMachine {
//   constructor(initialState = 'Nothing') {
//     this.state = initialState;
//   }

//   Like() {
//     if (this.state === 'Like') this.state = 'Nothing';
//     else this.state = 'Like';
//   }

//   Dislike() {
//     if (this.state === 'Dislike') this.state = 'Nothing';
//     else this.state = 'Dislike';
//   }
// }

// const likeOrDislike = arr => {
//   const tsm = new TinyStateMachine();
//   arr.forEach(action => tsm[action]());
//   return tsm.state;
// };

// function likeOrDislike(arr) {
// 	var a = "Nothing";
//   for(let i=0; i<arr.length; i++){
// 	if(arr[i]!=a){a=arr[i];}
// 	else{a="Nothing";}
//   }return a;
// }

// function likeOrDislike(arr) {
// 	let result = "Nothing";
// 	for (let x of arr) result = result === x ? "Nothing" : x;
// 	return result;
// }

// Test.assertEquals(likeOrDislike(['Dislike']), 'Dislike')
// Test.assertEquals(likeOrDislike(['Like', 'Like']), 'Nothing')
// Test.assertEquals(likeOrDislike(['Dislike', 'Dislike']), 'Nothing')
// Test.assertEquals(likeOrDislike(['Like', 'Like', 'Like']), 'Like')
// Test.assertEquals(likeOrDislike(['Like', 'Dislike']), 'Dislike')
// Test.assertEquals(likeOrDislike(['Dislike', 'Like']), 'Like')
// Test.assertEquals(likeOrDislike(['Like', 'Dislike', 'Dislike']), 'Nothing')
// Test.assertEquals(likeOrDislike(['Dislike', 'Like', 'Dislike']), 'Dislike')
// Test.assertEquals(likeOrDislike([]), 'Nothing')
// Test.assertEquals(likeOrDislike(['Like', 'Like', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike']), 'Dislike')
// Test.assertEquals(likeOrDislike(['Like', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Like', 'Like']), 'Like')
// Test.assertEquals(likeOrDislike(['Like', 'Like', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike', 'Dislike', 'Like', 'Like', 'Like', 'Dislike', 'Dislike']), 'Nothing')
// Test.assertEquals(likeOrDislike(['Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike']), 'Dislike')
