function calc(str) {
  const num1 = [...str].map((x) => x.charCodeAt()).join('');
  const num2 = num1
    .replace(/7/g, '1')
    .split('')
    .map((x) => +x);
  return [...num1].map((x, i) => +x - num2[i]).reduce((a, c) => a + c);
}
const result = calc('aaaaaddddrijkl');

console.log(result);

const testData = `Test.assertEquals(calc('ABCDabcd'), 12)
Test.assertEquals(calc('cdefgh'), 0)
Test.assertEquals(calc('ifkhchlhfde'), 6)
Test.assertEquals(calc('aaaaaddddrijkl'), 36)
Test.assertEquals(calc('abcdefghijklmnopqrstuvwxyz'), 18)
Test.assertEquals(calc('AABBCC'), 12)
Test.assertEquals(calc('ABCDEFGH'), 24)
Test.assertEquals(calc('anmatmudtr'), 18)
Test.assertEquals(calc('suwvete'), 6)
Test.assertEquals(calc('edabit'), 6)
Test.assertEquals(calc('EDABIT'), 6)
Test.assertEquals(calc('SLOWLLLY'), 36)
Test.assertEquals(calc('COMEnananan'), 42)
Test.assertEquals(calc('coupdetat'), 12)
Test.assertEquals(calc('arsenal'), 12)
Test.assertEquals(calc('byoaaasglrrsA'), 18)
Test.assertEquals(calc('byoglrrsA'), 0)
Test.assertEquals(calc('eyyyhenDDDUEN'), 6)
Test.assertEquals(calc('ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 78)
Test.assertEquals(calc('zyxwvutsrqpon'), 6)
Test.assertEquals(calc('ZYXWVUTSR'), 6)`;

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
