function sumMissingNumbers (arr) {
  const missing = []
  const maxNum = Math.max(...arr)
  const minNum = Math.min(...arr)
  const range = [...Array(maxNum - minNum + 1)].map((_, i) => minNum + i)

  if (range.length === arr.length) {
    return 0
  }

  for (let i = 0; i < range.length; i++) {
    if (arr.indexOf(range[i]) === -1) {
      missing.push(range[i])
    }
  }

  return missing.reduce((a, c) => a + c)
}

const result = sumMissingNumbers([17, 16, 15, 10, 11, 12])

console.log(result)
const resultAnzeige = (document.getElementById('demo').innerHTML = result)
