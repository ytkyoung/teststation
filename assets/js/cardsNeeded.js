const cardsNeeded = (n) => (n < 0 ? 'invalid' : (1 / 2) * (n + 3 * n * n));

const result = cardsNeeded(4);
console.log(result);

// const sumRange = arr => {
//     const [min, max] = arr.sort((a, b) => a - b);
//     return (max * (max + 1) - (min - 1) * min) / 2;
//   };

//   function cardsNeeded(n) {
//       if (n < 0) return 'invalid';
//       return sumRange([0, Math.max(0, n - 1)]) * 3 + n * 2;
//   }

const testData = `Test.assertEquals(cardsNeeded(-3), "invalid")
Test.assertEquals(cardsNeeded(-2), "invalid")
Test.assertEquals(cardsNeeded(-1), "invalid")
Test.assertEquals(cardsNeeded(0), 0)
Test.assertEquals(cardsNeeded(1), 2)
Test.assertEquals(cardsNeeded(2), 7)
Test.assertEquals(cardsNeeded(3), 15)
Test.assertEquals(cardsNeeded(4), 26)
Test.assertEquals(cardsNeeded(5), 40)
Test.assertEquals(cardsNeeded(6), 57)
Test.assertEquals(cardsNeeded(7), 77)
Test.assertEquals(cardsNeeded(8), 100)
Test.assertEquals(cardsNeeded(9), 126)
Test.assertEquals(cardsNeeded(10), 155)
Test.assertEquals(cardsNeeded(11), 187)
Test.assertEquals(cardsNeeded(12), 222)
Test.assertEquals(cardsNeeded(13), 260)
Test.assertEquals(cardsNeeded(14), 301)
Test.assertEquals(cardsNeeded(15), 345)
Test.assertEquals(cardsNeeded(16), 392)
Test.assertEquals(cardsNeeded(17), 442)
Test.assertEquals(cardsNeeded(18), 495)
Test.assertEquals(cardsNeeded(19), 551)
Test.assertEquals(cardsNeeded(20), 610)
Test.assertEquals(cardsNeeded(21), 672)
Test.assertEquals(cardsNeeded(22), 737)
Test.assertEquals(cardsNeeded(23), 805)
Test.assertEquals(cardsNeeded(24), 876)
Test.assertEquals(cardsNeeded(25), 950)
Test.assertEquals(cardsNeeded(26), 1027)
Test.assertEquals(cardsNeeded(27), 1107)
Test.assertEquals(cardsNeeded(28), 1190)
Test.assertEquals(cardsNeeded(29), 1276)
Test.assertEquals(cardsNeeded(30), 1365)
Test.assertEquals(cardsNeeded(31), 1457)
Test.assertEquals(cardsNeeded(32), 1552)
Test.assertEquals(cardsNeeded(33), 1650)
Test.assertEquals(cardsNeeded(34), 1751)
Test.assertEquals(cardsNeeded(35), 1855)
Test.assertEquals(cardsNeeded(36), 1962)
Test.assertEquals(cardsNeeded(37), 2072)
Test.assertEquals(cardsNeeded(38), 2185)
Test.assertEquals(cardsNeeded(39), 2301)
Test.assertEquals(cardsNeeded(40), 2420)
Test.assertEquals(cardsNeeded(41), 2542)
Test.assertEquals(cardsNeeded(42), 2667)
Test.assertEquals(cardsNeeded(43), 2795)
Test.assertEquals(cardsNeeded(44), 2926)
Test.assertEquals(cardsNeeded(45), 3060)
Test.assertEquals(cardsNeeded(46), 3197)
Test.assertEquals(cardsNeeded(47), 3337)
Test.assertEquals(cardsNeeded(48), 3480)
Test.assertEquals(cardsNeeded(49), 3626)
Test.assertEquals(cardsNeeded(50), 3775)`;

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
