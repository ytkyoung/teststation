function reverseTitle(s) {
  return s
    .toLowerCase()
    .split(' ')
    .map((x) => x.slice(0, 1) + x.slice(1).toUpperCase())
    .join(' ');
}
const result = reverseTitle('Elephants dance about bravely in Thailand');
console.log(result);

// String.prototype.reverseTitle = function() {
// 	return this.toUpperCase().replace(/\b./g, m => m.toLowerCase());
// };

// const reverseCapitalize = str =>
// 	str[0].toLowerCase() + str.slice(1).toUpperCase();

// const reverseTitle = str => str.split(' ').map(reverseCapitalize).join(' ');
