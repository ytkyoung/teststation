function gimmeTheLetters(spectrum) {
  const letters = spectrum.split('-').map((x) => x.charCodeAt());
  return Array.from(Array(letters[1] - letters[0] + 1))
    .map((e, i) => i + letters[0])
    .map((x) => String.fromCharCode(x))
    .join('');
}

// function gimmeTheLetters(sp){
//     let s =''
//     for (let i = sp.charCodeAt(0); i <= sp.charCodeAt(2); i++) {
//       s+=String.fromCharCode(i)
//     }
//     return s
// }

const result = gimmeTheLetters('Q-Z');
console.log(result);

const testData = `Test.assertEquals(gimmeTheLetters("a-z"), "abcdefghijklmnopqrstuvwxyz")
Test.assertEquals(gimmeTheLetters("h-o"), "hijklmno")
Test.assertEquals(gimmeTheLetters("Q-Z"), "QRSTUVWXYZ")
Test.assertEquals(gimmeTheLetters("J-J"), "J")
Test.assertEquals(gimmeTheLetters("a-b"), "ab")
Test.assertEquals(gimmeTheLetters("A-A"), "A")
Test.assertEquals(gimmeTheLetters("g-i"), "ghi")
Test.assertEquals(gimmeTheLetters("H-I"), "HI")
Test.assertEquals(gimmeTheLetters("y-z"), "yz")
Test.assertEquals(gimmeTheLetters("e-k"), "efghijk")
Test.assertEquals(gimmeTheLetters("a-q"), "abcdefghijklmnopq")
Test.assertEquals(gimmeTheLetters("F-O"), "FGHIJKLMNO")`;

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
