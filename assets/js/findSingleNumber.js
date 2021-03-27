function findSingleNumber(numbers) {
  return numbers.filter((x) => numbers.indexOf(x) === numbers.lastIndexOf(x))[0] || null;
}

const result = findSingleNumber([
  1,
  2,
  3,
  6,
  5,
  4,
  4,
  2,
  5,
  3,
  6,
  1,
  6,
  5,
  3,
  2,
  4,
  1,
  2,
  5,
  1,
  4,
  3,
  6,
  101,
  4,
  3,
  1,
  5,
  6,
  2,
]);
console.log(result);

const testData = `Test.assertEquals(findSingleNumber([2,2,2, 3, 4,4,4]), 3)
Test.assertEquals(findSingleNumber([415]), 415)
Test.assertEquals(findSingleNumber([]), null)
Test.assertEquals(findSingleNumber([7,13,3,6,5,4,4,13,5,3,6,7,6,5,3,13,4,7,13,5,7,4,3,6,8,4,3,7,5,6,13]), 8)
Test.assertEquals(findSingleNumber([1, 2, 3, 6, 5, 4, 4, 2, 5, 3, 6, 1, 6, 5, 3, 2, 4, 1, 2, 5, 1, 4, 3, 6, 101, 4, 3, 1, 5, 6, 2]), 101)
Test.assertEquals(findSingleNumber([1, 2, 2, 3, 3]), 1)
Test.assertEquals(typeof(findSingleNumber([243, 70, 18, 60, 284, 148, 418, 360, 727, 791, 325])), 'number')
Test.assertEquals(findSingleNumber([364, 938, 123, 686, 111, 227, 802, 667, 35, 858, 364, 938, 123, 686, 111, 227, 802, 667, 35, 858, 364, 938, 123, 686, 111, 227, 802, 667, 35, 858, 364, 938, 123, 686, 111, 227, 802, 667, 35, 858, 364, 938, 123, 686, 111, 227, 802, 667, 35, 858, 497]), 497)
Test.assertEquals(findSingleNumber([116, 621, 698, 894, 96, 630, 291, 327, 911, 350, 116, 621, 698, 894, 96, 630, 291, 327, 911, 350, 521]), 521)
`;

const funk = testData.match(/(?<=\().*(?=,)/g);
const ergebnis = testData.match(/(?<=\), ).*(?=\))/g);

console.log(funk);
console.log(ergebnis);
// mit String
// const ergebnis = testData.match(/(?<=\), ").*(?="\)))/g);

function consolo() {
  return funk.map((x, i) => `const consolo${i + 1} = ${x}`).join('; <br>');
}

function displayErgebnis() {
  return ergebnis.map((x, i) => `const ergebnis${i + 1} = ${x}`).join('; <br>');
}

// console.log(consolo());
console.log(displayErgebnis());

const resultFunk = consolo();
const resultErgebnis = displayErgebnis();

// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
const h2Test = `<h2>
  ${funk[0]}
</h2><p>${resultFunk} <br><br> ${resultErgebnis}</p>`;

// add three list items with the words "one, two three" in them
// put that list into the above wrapper
div.innerHTML = h2Test;

function generatePlayerCard(funki, ergebnisse, numm, fun) {
  const farbeTrue = `${funki.toString()}` === ergebnisse;

  const html = `
      <div class="playerCard">
        <h2>${funki}</h2>
        <p>${ergebnisse}<p>
        <p>Test ${numm} ist ${farbeTrue}.</p>
        <p>${fun}</p>
        <div><button class="delete" type="button">&times; Delete</button></div>
      </div>
    `;

  return html;
}

const cards = document.createElement('div');
cards.classList.add('cards');

let cardsHTML = [];
for (let i = 0; i < funk.length; i++) {
  cardsHTML += generatePlayerCard(eval(funk[i]), ergebnis[i], i + 1, funk[i]);
}

cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);

const buttonsDelete = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  // buttonThatGotClicked.parentElement.remove();
  buttonThatGotClicked.closest('.playerCard').remove();
}

// loop over them and attach a listener
buttonsDelete.forEach((button) => button.addEventListener('click', deleteCard));

// console.log(document.getElementsByClassName('playerCard'));
