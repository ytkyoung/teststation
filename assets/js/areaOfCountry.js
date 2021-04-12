function areaOfCountry(name, area) {
  const prozent = ((1 / 1489400) * area).toFixed(2);
  return `${name} is ${prozent}% of the total world's landmass`;
}

const result = areaOfCountry('Russia', 17098242);
console.log(result);
