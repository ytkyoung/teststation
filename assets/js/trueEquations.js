function trueEquations(arr) {
  const split = arr.map((x) => x.split('='));
  const e1 = split.map((x) => +x[1]);
  const e2 = split.map((y) => eval(y[0]));
  return e1.map((x, i) => (x === e2[i] ? arr[i] : -1)).filter((y) => typeof y === 'string');
}

const result = trueEquations(['1+1=2', '2+2=3', '5*5=10', '3/3=1']);
console.log(result);

// const trueEquations = arr => arr.filter(exp => eval(exp.replace("=","===")));

// Test.assertSimilar(trueEquations(["2*2=4"]), ["2*2=4"])
// Test.assertSimilar(trueEquations(["1+1=3", "3-1=1"]), [])
// Test.assertSimilar(trueEquations(["1+1=2", "2+2=3", "5*5=10", "3/3=1"]), ["1+1=2", "3/3=1"])
// Test.assertSimilar(trueEquations(["4/2=2", "8-4=2", "5*5=25", "3/3=14"]), ["4/2=2", "5*5=25"])
// Test.assertSimilar(trueEquations(["1-1=0", "2/2=1", "13+9=22", "1*9=9"]), ["1-1=0", "2/2=1", "13+9=22", "1*9=9"])
// Test.assertSimilar(trueEquations(["1/41=3", "2+19=14", "13*9=22", "1-9=9"]), [])
// Test.assertSimilar(trueEquations(["82/41=2", "21-17=3", "3+99=2", "9*9=81","7*6=42","101+10=111","2*3=5","143/11=13"]), ["82/41=2","9*9=81","7*6=42","101+10=111","143/11=13"])
