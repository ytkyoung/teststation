function isSubset (arr1, arr2) {
  return arr1.every((_, i) => arr2.indexOf(arr1[i]) > -1)
}

const result = isSubset([3, 2, 5], [5, 3, 7, 9, 2])

console.log(result)
const resultAnzeige = (document.getElementById('demo').innerHTML = result)
