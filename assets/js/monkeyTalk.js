function monkeyTalk(txt) {
  const str = `${txt
    .split(' ')
    .map((x) => (x.match(/^[aeiuo]/i) ? 'eek' : 'ook'))
    .join(' ')}.`;
  return str[0].toUpperCase() + str.substr(1);
}

const result = monkeyTalk('Edabit is Amazing');

console.log(result);

const testData = `Test.assertEquals(monkeyTalk("Mubashir Hassan"), "Ook ook.")
Test.assertEquals(monkeyTalk("Edabit is Amazing"), "Eek eek eek.")
Test.assertEquals(monkeyTalk("Matt"), "Ook.")
Test.assertEquals(monkeyTalk("Hello"), "Ook.")
Test.assertEquals(monkeyTalk("you are so beautiful"), "Ook eek ook ook.")
Test.assertEquals(monkeyTalk("Everyone"), "Eek.")
Test.assertEquals(monkeyTalk("Hello Everyone"), "Ook eek.")
Test.assertEquals(monkeyTalk("Everyone Hello"), "Eek ook.")`;

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
