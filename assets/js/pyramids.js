const pyramidArrays = (n) => Array.from({ length: n }, (_, i) => Array.from({ length: i + 1 }).fill(i + 1));

console.log(pyramidArrays(3));
