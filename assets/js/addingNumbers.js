function add(numberOne, numberTwo) {
  return [numberOne, numberTwo].map((x) => typeof x !== 'string' || x === '').filter((x) => x).length > 0
    ? 'Invalid Operation'
    : (+numberOne + +numberTwo).toString();
}

const result = add('111', '111');
console.log(result);

// function add(numberOne, numberTwo) {
//     return !numberOne || !numberTwo ? 'Invalid Operation' : `${+numberOne + +numberTwo}`;
//   }

// const add = (n1, n2) =>
// 	/^-?\d+-?\d+$/.test(n1+n2)? String(+n1 + +n2) : 'Invalid Operation';

const testData = `Test.assertEquals(add('91', '19'), '110');
Test.assertEquals(add('123456789', '987654322'), '1111111111');
Test.assertEquals(add('9999999', '1'), '10000000');
Test.assertEquals(add('300', '3000'), '3300');
Test.assertEquals(add('1000', '6200'), '7200');
Test.assertEquals(add('-10', '-20'), '-30');
Test.assertEquals(add('-100', '100'), '0');
Test.assertEquals(add('0', '6200'), '6200');
Test.assertEquals(add('', '6'), 'Invalid Operation');
Test.assertEquals(add('', undefined), 'Invalid Operation');
Test.assertEquals(add(null, '23'), 'Invalid Operation');
Test.assertEquals(add('', '20'),"Invalid Operation");`;

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
