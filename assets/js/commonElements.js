function commonElements (arr1, arr2) {
  const missing = []
  let largerArr = arr1.length >= arr2.length ? arr1 : arr2
  let shorterArr = arr1.length >= arr2.length ? arr2 : arr1

  for (let i = 0; i < largerArr.length; i++) {
    if (shorterArr.indexOf(largerArr[i]) !== -1) {
      missing.push(largerArr[i])
    }
  }

  return [...new Set(missing)]
}

const result = commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10])

console.log(result)
const resultAnzeige = (document.getElementById('demo').innerHTML = result)

// https://edabit.com/challenge/jtAvQyyDpFA2EaCcj

// const commonElements = (arr1, arr2) => [...new Set(arr1.filter(x => arr2.includes(x)))];

// function commonElements(arr1, arr2) {
// 	return arr2.filter(value => arr1.includes(value))
// }
