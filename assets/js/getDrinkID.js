function getDrinkID(flavor, ml) {
  return (
    flavor
      .split(' ')
      .map((x) => x.slice(0, 3))
      .join('')
      .toUpperCase() + ml.replace(/(\D)/g, '')
  );
}

const result = getDrinkID('passion fruit', '750ml');
console.log(result);

// Test.assertEquals(getDrinkID("apple", "500ml"), "APP500")
// Test.assertEquals(getDrinkID("pineapple", "45ml"), "PIN45")
// Test.assertEquals(getDrinkID("orange", "750ml"), "ORA750")
// Test.assertEquals(getDrinkID("passion fruit", "1ml"), "PASFRU1")
// Test.assertEquals(getDrinkID("mango", "1000ml"), "MAN1000")
// Test.assertEquals(getDrinkID("very berry", "253ml"), "VERBER253")
// Test.assertEquals(getDrinkID("raspberry and lime", "350ml"), "RASANDLIM350")
