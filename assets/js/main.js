function sub (A1, A2) {
  let newSub = A1
  for (let i = 0; i < A1.length; i++) {
    for (let j = 0; j < A1.length; j++) {
      newSub[i][j] = A1[i][j] - A2[i][j]
    }
  }
  return newSub
}

const result = sub(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ],
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 10]
  ]
)

console.log(result)
const resultAnzeige = (document.getElementById('demo').innerHTML = result)
