function intWithinBounds(n, lower, upper) {
  return n >= lower && n < upper && Number.isInteger(n);
}
const result = intWithinBounds(3, 1, 9);
console.log(result);

const testData = `Test.assertEquals(intWithinBounds(3, 1, 9), true)
Test.assertEquals(intWithinBounds(6, 1, 6), false)
Test.assertEquals(intWithinBounds(4.5, 3, 8), false)
Test.assertEquals(intWithinBounds(-5, -10, 6), true)
Test.assertEquals(intWithinBounds(4, 0, 0), false)
Test.assertEquals(intWithinBounds(10, 9, 11), true)
Test.assertEquals(intWithinBounds(6.3, 2, 6), false)
Test.assertEquals(intWithinBounds(6.3, 2, 10), false)
Test.assertEquals(intWithinBounds(9, 2, 3), false)
Test.assertEquals(intWithinBounds(9, 9, 9), false)
Test.assertEquals(intWithinBounds(-3, -5, -2), true)
Test.assertEquals(intWithinBounds(-3, -5, -3), false)
Test.assertEquals(intWithinBounds(-3, -10, 10), true)
Test.assertEquals(intWithinBounds(0, -3, 3), true)
Test.assertEquals(intWithinBounds(0, 0, 1), true)
Test.assertEquals(intWithinBounds(7, 7, 12), true)`;

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
