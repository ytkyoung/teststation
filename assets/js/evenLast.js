const evenLast = arr =>
  arr.length ? arr.map((x, i) => (!(i % 2) ? x : 0)).reduce((a, b) => a + b) * arr[arr.length - 1] : 0;

const result = evenLast([1, 4, 5, 6, 7, 2, 3]);
console.log(result);

const testData = `Test.assertEquals(evenLast([]), 0)
Test.assertEquals(evenLast([1, 3, 3, 1, 10]), 140)
Test.assertEquals(evenLast([-11, 3, 3, 1, 10]), 20)
Test.assertEquals(evenLast([1, 31, 3, 11, 0]), 0)
Test.assertEquals(evenLast([1, 2, 3, 4, 5, 6, 8]), 136)
Test.assertEquals(evenLast([2, 3, 4, 5]), 30)
Test.assertEquals(evenLast([2, 4, 6, 8, 9, 11]), 187)
Test.assertEquals(evenLast([6, 5, 7, 2, 1]), 14)
Test.assertEquals(evenLast([2, 2, 2, 2]), 8)
Test.assertEquals(evenLast([5, 1, 2, 3, 4, 6, 7, 8, 4]), 88)
Test.assertEquals(evenLast([2, 4, 3, 2, 3, 4, 4, 5]), 60)
Test.assertEquals(evenLast([7, 23, 22, 6, 8, 2]), 74)
Test.assertEquals(evenLast([33, 2, -22, 5, -6, 5]), 25)
Test.assertEquals(evenLast([5, 6, 7, 3, 22, 2]), 68)
Test.assertEquals(evenLast([3, 4, 5, 6, 7, 8]), 120)
Test.assertEquals(evenLast([1, 4, 5, 6, 7, 2, 3]), 48)
Test.assertEquals(evenLast([2, 7, 0, 3, 4, 8, 3]), 27)
Test.assertEquals(evenLast([9, 3, -6, 2, 7, 8]), 80)
Test.assertEquals(evenLast([7, 7, 7, 7, 1]), 15)
Test.assertEquals(evenLast([6, 7, 8, 9, 10, 3, 4]), 112)
Test.assertEquals(evenLast([9, 8, 7, 6, 5, 4, 3, 2]), 48)
Test.assertEquals(evenLast([]), 0)`;

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
buttonsDelete.forEach(button => button.addEventListener('click', deleteCard));

// console.log(document.getElementsByClassName('playerCard'));
