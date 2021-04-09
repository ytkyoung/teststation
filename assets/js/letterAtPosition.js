// function letterAtPosition(n) {
//   if (n % 1 !== 0 || n === 0) {
//     return 'invalid';
//   }
//   return String.fromCharCode(n + 96);
// }

const letterAtPosition = (n) => (n % 1 !== 0 || n === 0 ? 'invalid' : String.fromCharCode(n + 96));

const result = letterAtPosition(26.0);

console.log(result);

// const letterAtPosition = n =>
//  Number.isInteger(n)&& n>0? (n+9).toString(36) : 'invalid';

const testData = `Test.assertEquals(letterAtPosition(1), "a")
Test.assertEquals(letterAtPosition(2), "b")
Test.assertEquals(letterAtPosition(3), "c")
Test.assertEquals(letterAtPosition(4), "d")
Test.assertEquals(letterAtPosition(5), "e")
Test.assertEquals(letterAtPosition(6), "f")
Test.assertEquals(letterAtPosition(7), "g")
Test.assertEquals(letterAtPosition(8), "h")
Test.assertEquals(letterAtPosition(9), "i")
Test.assertEquals(letterAtPosition(10), "j")
Test.assertEquals(letterAtPosition(11), "k")
Test.assertEquals(letterAtPosition(12), "l")
Test.assertEquals(letterAtPosition(13), "m")
Test.assertEquals(letterAtPosition(14), "n")
Test.assertEquals(letterAtPosition(15), "o")
Test.assertEquals(letterAtPosition(16), "p")
Test.assertEquals(letterAtPosition(17), "q")
Test.assertEquals(letterAtPosition(18), "r")
Test.assertEquals(letterAtPosition(19), "s")
Test.assertEquals(letterAtPosition(20), "t")
Test.assertEquals(letterAtPosition(21), "u")
Test.assertEquals(letterAtPosition(22), "v")
Test.assertEquals(letterAtPosition(23), "w")
Test.assertEquals(letterAtPosition(24), "x")
Test.assertEquals(letterAtPosition(25), "y")
Test.assertEquals(letterAtPosition(26), "z")
Test.assertEquals(letterAtPosition(0), "invalid")
Test.assertEquals(letterAtPosition(4.5), "invalid")
Test.assertEquals(letterAtPosition(4.0), "d")
Test.assertEquals(letterAtPosition(1.0), "a")
Test.assertEquals(letterAtPosition(26.0), "z")`;

const funk = testData.match(/(?<=\().*(?=,)/g);
const ergebnis = testData.match(/(?<=\), ).*(?=\))/g);

console.log(funk);
// const ergebnis = testData.match(/(?<=\), ").*(?="\)))/g);  mit String

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
