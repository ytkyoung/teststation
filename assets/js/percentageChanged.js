function percentageChanged(oldPrice, newPrice) {
  const oldP = +oldPrice.match(/[\d*]/g).join('');
  const newP = +newPrice.match(/[\d*]/g).join('');
  const prozent = Math.round((1 - newP / oldP) * 100);
  return prozent > 0 ? `${prozent}% decrease` : `${Math.abs(prozent)}% increase`;
}

const result = percentageChanged('$800', '$16200');
console.log(result);
