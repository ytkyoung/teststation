const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

function tallyNumbers(tally, currentTotal) {
  console.log(`The current is  ${tally}`);
  console.log(`The current is  ${currentTotal}`);
  console.log('------------------------');
  return tally + currentTotal;
}

const allOrders = orderTotals.reduce(tallyNumbers, 0);

const result = allOrders;
console.log(result);

const inventory = [
  { type: 'shirt', price: 4000 },
  { type: 'pants', price: 4532 },

  { type: 'socks', price: 234 },
  { type: 'shirt', price: 2343 },
  { type: 'pants', price: 2343 },
  { type: 'socks', price: 542 },
  { type: 'pants', price: 123 },
];

function inventoryReducer(totals, item) {
  console.log(`Looping over ${item.type}`);
  // increment the type by 1
  totals[item.type] = totals[item.type] + 1 || 1;
  // totals.shirt ? totals.shirt + 1 : totals.shirt = 1;
  // return the totals, so the next loop can use it
  return totals;
}

const inventoryCounts = inventory.reduce(inventoryReducer, {});

console.log(inventoryCounts);

const totalInventoryPrice = inventory.reduce((acc, item) => acc + item.price, 0);
console.log(totalInventoryPrice);
