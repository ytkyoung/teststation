function bbqSkewers(grill) {
  const vegetarian = [];
  const nonVegetarian = [];

  grill.filter((x) => (/x/g.test(x) ? nonVegetarian.push('fleisch') : vegetarian.push('gemüse')));

  return [vegetarian.length, nonVegetarian.length];
}

const result = bbqSkewers(['--oooo-ooo--', '--xx--x--xx--', '--o---o--oo--', '--xx--x--ox--', '--xx--x--ox--']);
console.log(result);
