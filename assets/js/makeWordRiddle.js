function makeWordRiddle(s) {
  const splitS = s.toUpperCase().split('IN');
  const remainS = splitS[1] || '';
  return remainS.replace(remainS[0], `$&${splitS[0]}`);
}

const result = makeWordRiddle('finland');
console.log(result);

// function makeWordRiddle(s) {
// 	const [first, last] = s.toUpperCase().split(/IN/);
//   	return last[0] + first + last.slice(1);
// }

// function makeWordRiddle(s) {
//   const [a, b] =  s.toUpperCase().split("IN");
//   return b[0] + a + b.slice(1);
// }

// const makeWordRiddle = s => (
//   s = s.toUpperCase().split('IN'),
//   [...s[1]].map((x, i) => i === 1 ? s[0] + x : x).join``
// );

const testData = `Test.assertEquals(makeWordRiddle('Finland'), 'LFAND')
Test.assertEquals(makeWordRiddle('dinner'), 'NDER')
Test.assertEquals(makeWordRiddle('tkinter'), 'TTKER')
Test.assertEquals(makeWordRiddle('STRINGS'), 'GSTRS')
Test.assertEquals(makeWordRiddle('continue'), 'UCONTE')
Test.assertEquals(makeWordRiddle('cinematographer'), 'ECMATOGRAPHER')
Test.assertEquals(makeWordRiddle('distinguishable'), 'GDISTUISHABLE')
Test.assertEquals(makeWordRiddle('Determination'), 'ADETERMTION')
Test.assertEquals(makeWordRiddle('plainclothesman'), 'CPLALOTHESMAN')
Test.assertEquals(makeWordRiddle('attainablities'), 'AATTABLITIES')
Test.assertEquals(makeWordRiddle('administrations'), 'IADMSTRATIONS')
Test.assertEquals(makeWordRiddle('chloestyramines'), 'ECHLOESTYRAMS')
Test.assertEquals(makeWordRiddle('bituminizations'), 'IBITUMZATIONS')
Test.assertEquals(makeWordRiddle('metalinguistics'), 'GMETALUISTICS')
Test.assertEquals(makeWordRiddle('choriocarcinoma'), 'OCHORIOCARCMA')
Test.assertEquals(makeWordRiddle('trinitrotoluene'), 'ITRTROTOLUENE')
Test.assertEquals(makeWordRiddle('provINcial'), 'CPROVIAL')
Test.assertEquals(makeWordRiddle('SlingShot'), 'GSLSHOT')`;

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
