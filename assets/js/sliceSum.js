function sliceSum (arr, n) {
  return arr.slice(0, n).reduce((a, c) => a + c, 0)
}

const result = sliceSum([4, 2, 5, 7], 4)

console.log(result)
const resultAnzeige = (document.getElementById('demo').innerHTML = result)

// https://edabit.com/challenge/B3FR3P7g8NyTg7t8b

// const sliceSum = (arr, n) => arr.reduce((a, v, i) => i < n? a + v : a, 0);
