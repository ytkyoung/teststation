function evenOrOdd(str) {

  const odd = str
    .split("")
    .filter((x) => x % 2)
    .map((x) => +x)
    .reduce((a, b) => a + b);

  const even = str
    .split("")
    .filter((x) => x % 2 === 0)
    .map((x) => +x)
    .reduce((a, b) => a + b);

  if (odd === even) {
    return 'Even and Odd are the same';
  } else if(odd > even) {
    return 'Odd is greater than Even';
  } else {
    return 'Even is greater than Odd'
  }

}

const testData = `Test.assertEquals(evenOrOdd('12345'), 'Odd is greater than Even')
Test.assertEquals(evenOrOdd('143'), 'Even and Odd are the same')
Test.assertEquals(evenOrOdd('2221'), 'Even is greater than Odd')
Test.assertEquals(evenOrOdd('23456'), 'Even is greater than Odd')
Test.assertEquals(evenOrOdd('4321'), 'Even is greater than Odd')
Test.assertEquals(evenOrOdd('3245'), 'Odd is greater than Even')
Test.assertEquals(evenOrOdd('14256'), 'Even is greater than Odd')
Test.assertEquals(evenOrOdd('11234'), 'Even is greater than Odd')
Test.assertEquals(evenOrOdd('1734'), 'Odd is greater than Even')
Test.assertEquals(evenOrOdd('145'), 'Odd is greater than Even')
Test.assertEquals(evenOrOdd('22471'), 'Even and Odd are the same')
Test.assertEquals(evenOrOdd('213613'), 'Even and Odd are the same')
Test.assertEquals(evenOrOdd('23456'), 'Even is greater than Odd')
Test.assertEquals(evenOrOdd('9738'), 'Odd is greater than Even')
Test.assertEquals(evenOrOdd('34522'), 'Even and Odd are the same')
Test.assertEquals(evenOrOdd('12378'), 'Odd is greater than Even')
Test.assertEquals(evenOrOdd('45228'), 'Even is greater than Odd')
Test.assertEquals(evenOrOdd('4455'), 'Odd is greater than Even')
Test.assertEquals(evenOrOdd('6721'), 'Even and Odd are the same')
Test.assertEquals(evenOrOdd('92184'), 'Even is greater than Odd')
Test.assertEquals(evenOrOdd('12'), 'Even is greater than Odd')
Test.assertEquals(evenOrOdd('123'), 'Odd is greater than Even')
Test.assertEquals(evenOrOdd('112'), 'Even and Odd are the same')
Test.assertEquals(evenOrOdd('124'), 'Even is greater than Odd')`;

const funk = testData.match(/(?<=\().*(?=,)/g);
const ergebnis = testData.match(/(?<=\), ).*(?=\))/g);

console.log(funk);
// const ergebnis = testData.match(/(?<=\), ").*(?="\)))/g);  mit String

function consolo() {
  return funk.map((x, i) => `const consolo${i + 1} = ${x}`).join("; <br>");
}

function displayErgebnis() {
  return ergebnis.map((x, i) => `const ergebnis${i + 1} = ${x}`).join("; <br>");
}

// console.log(consolo());
console.log(displayErgebnis());

const resultFunk = consolo();
const resultErgebnis = displayErgebnis();

// Make a div
const div = document.createElement("div");
// add a class of wrapper to it
div.classList.add("wrapper");

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

const cards = document.createElement("div");
cards.classList.add("cards");

let cardsHTML = [];
for (let i = 0; i < funk.length; i++) {
  cardsHTML += generatePlayerCard(eval(funk[i]), ergebnis[i], i + 1, funk[i]);
}

cards.innerHTML = cardsHTML;
div.insertAdjacentElement("beforebegin", cards);

const buttonsDelete = document.querySelectorAll(".delete");
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  // buttonThatGotClicked.parentElement.remove();
  buttonThatGotClicked.closest(".playerCard").remove();
}

// loop over them and attach a listener
buttonsDelete.forEach((button) => button.addEventListener("click", deleteCard));

// console.log(document.getElementsByClassName('playerCard'));
