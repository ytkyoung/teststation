function joinDigits(n) {
  return Array.from({ length: n }, (_, i) => (i + 1).toString())
    .map((x) => x.split(''))
    .join(',')
    .split(',')
    .join('-');
}
const result = joinDigits(11);

console.log(result);

const testData = `Test.assertEquals(joinDigits(1), "1")
Test.assertEquals(joinDigits(2), "1-2")
Test.assertEquals(joinDigits(3), "1-2-3")
Test.assertEquals(joinDigits(4), "1-2-3-4")
Test.assertEquals(joinDigits(5), "1-2-3-4-5")
Test.assertEquals(joinDigits(6), "1-2-3-4-5-6")
Test.assertEquals(joinDigits(7), "1-2-3-4-5-6-7")
Test.assertEquals(joinDigits(8), "1-2-3-4-5-6-7-8")
Test.assertEquals(joinDigits(9), "1-2-3-4-5-6-7-8-9")
Test.assertEquals(joinDigits(10), "1-2-3-4-5-6-7-8-9-1-0")
Test.assertEquals(joinDigits(11), "1-2-3-4-5-6-7-8-9-1-0-1-1")
Test.assertEquals(joinDigits(12), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2")
Test.assertEquals(joinDigits(13), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3")
Test.assertEquals(joinDigits(14), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4")
Test.assertEquals(joinDigits(15), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5")
Test.assertEquals(joinDigits(16), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6")
Test.assertEquals(joinDigits(17), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7")
Test.assertEquals(joinDigits(18), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8")
Test.assertEquals(joinDigits(19), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9")
Test.assertEquals(joinDigits(20), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0")
Test.assertEquals(joinDigits(21), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1")
Test.assertEquals(joinDigits(22), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2")
Test.assertEquals(joinDigits(23), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3")
Test.assertEquals(joinDigits(24), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4")
Test.assertEquals(joinDigits(25), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5")
Test.assertEquals(joinDigits(26), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6")
Test.assertEquals(joinDigits(27), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7")
Test.assertEquals(joinDigits(28), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8")
Test.assertEquals(joinDigits(29), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9")
Test.assertEquals(joinDigits(30), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9-3-0")
Test.assertEquals(joinDigits(31), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9-3-0-3-1")
Test.assertEquals(joinDigits(32), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9-3-0-3-1-3-2")
Test.assertEquals(joinDigits(33), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9-3-0-3-1-3-2-3-3")
Test.assertEquals(joinDigits(34), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9-3-0-3-1-3-2-3-3-3-4")
Test.assertEquals(joinDigits(35), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9-3-0-3-1-3-2-3-3-3-4-3-5")
Test.assertEquals(joinDigits(36), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9-3-0-3-1-3-2-3-3-3-4-3-5-3-6")
Test.assertEquals(joinDigits(37), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9-3-0-3-1-3-2-3-3-3-4-3-5-3-6-3-7")
Test.assertEquals(joinDigits(38), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9-3-0-3-1-3-2-3-3-3-4-3-5-3-6-3-7-3-8")
Test.assertEquals(joinDigits(39), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9-3-0-3-1-3-2-3-3-3-4-3-5-3-6-3-7-3-8-3-9")
Test.assertEquals(joinDigits(40), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9-3-0-3-1-3-2-3-3-3-4-3-5-3-6-3-7-3-8-3-9-4-0")
Test.assertEquals(joinDigits(41), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9-3-0-3-1-3-2-3-3-3-4-3-5-3-6-3-7-3-8-3-9-4-0-4-1")
Test.assertEquals(joinDigits(42), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9-3-0-3-1-3-2-3-3-3-4-3-5-3-6-3-7-3-8-3-9-4-0-4-1-4-2")
Test.assertEquals(joinDigits(43), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9-3-0-3-1-3-2-3-3-3-4-3-5-3-6-3-7-3-8-3-9-4-0-4-1-4-2-4-3")
Test.assertEquals(joinDigits(44), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9-3-0-3-1-3-2-3-3-3-4-3-5-3-6-3-7-3-8-3-9-4-0-4-1-4-2-4-3-4-4")
Test.assertEquals(joinDigits(45), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9-3-0-3-1-3-2-3-3-3-4-3-5-3-6-3-7-3-8-3-9-4-0-4-1-4-2-4-3-4-4-4-5")
Test.assertEquals(joinDigits(46), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9-3-0-3-1-3-2-3-3-3-4-3-5-3-6-3-7-3-8-3-9-4-0-4-1-4-2-4-3-4-4-4-5-4-6")
Test.assertEquals(joinDigits(47), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9-3-0-3-1-3-2-3-3-3-4-3-5-3-6-3-7-3-8-3-9-4-0-4-1-4-2-4-3-4-4-4-5-4-6-4-7")
Test.assertEquals(joinDigits(48), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9-3-0-3-1-3-2-3-3-3-4-3-5-3-6-3-7-3-8-3-9-4-0-4-1-4-2-4-3-4-4-4-5-4-6-4-7-4-8")
Test.assertEquals(joinDigits(49), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9-3-0-3-1-3-2-3-3-3-4-3-5-3-6-3-7-3-8-3-9-4-0-4-1-4-2-4-3-4-4-4-5-4-6-4-7-4-8-4-9")
Test.assertEquals(joinDigits(50), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-9-3-0-3-1-3-2-3-3-3-4-3-5-3-6-3-7-3-8-3-9-4-0-4-1-4-2-4-3-4-4-4-5-4-6-4-7-4-8-4-9-5-0")`;

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
  const farbeTrue = `"${funki.toString()}"` === ergebnisse;

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
