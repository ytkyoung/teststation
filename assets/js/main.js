function getMissingLetters(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
	return [...alphabet].filter(x => !s.match(x)).join('');
}

console.log(getMissingLetters);

const testData = `Test.assertEquals(getMissingLetters("abcdefgpqrstuvwxyz"), "hijklmno")
Test.assertEquals(getMissingLetters("zyxwvutsrq"), "abcdefghijklmnop")
Test.assertEquals(getMissingLetters(""), "abcdefghijklmnopqrstuvwxyz")
Test.assertEquals(getMissingLetters("abcdefghijklmnopqrstuvwxyz"), "")
Test.assertEquals(getMissingLetters("qinjwm"), "abcdefghkloprstuvxyz")
Test.assertEquals(getMissingLetters("luiqtkgwzheapr"), "bcdfjmnosvxy")
Test.assertEquals(getMissingLetters("qankj"), "bcdefghilmoprstuvwxyz")
Test.assertEquals(getMissingLetters("bawgeuskmfcrpodnxztviy"), "hjlq")
Test.assertEquals(getMissingLetters("gdpna"), "bcefhijklmoqrstuvwxyz")
Test.assertEquals(getMissingLetters("hbi"), "acdefgjklmnopqrstuvwxyz")
Test.assertEquals(getMissingLetters("djxifockvwhaqbnmstzpylu"), "egr")
Test.assertEquals(getMissingLetters("gastzwjcnvoprfmxd"), "behiklquy")
Test.assertEquals(getMissingLetters("xuti"), "abcdefghjklmnopqrsvwyz")
Test.assertEquals(getMissingLetters("abc"), "defghijklmnopqrstuvwxyz")
Test.assertEquals(getMissingLetters("kchiatvmbqrdsyopwju"), "efglnxz")
Test.assertEquals(getMissingLetters("xbkj"), "acdefghilmnopqrstuvwyz")
Test.assertEquals(getMissingLetters("cbvkyroes"), "adfghijlmnpqtuwxz")
Test.assertEquals(getMissingLetters("s"), "abcdefghijklmnopqrtuvwxyz")
Test.assertEquals(getMissingLetters("idvgzujmswloefcthb"), "aknpqrxy")
Test.assertEquals(getMissingLetters("fmoraygevhkxzutcjd"), "bilnpqsw")
Test.assertEquals(getMissingLetters("vuynqpaf"), "bcdeghijklmorstwxz")
Test.assertEquals(getMissingLetters("j"), "abcdefghiklmnopqrstuvwxyz")`;

const funk = testData.match(/(?<=\().*(?=,)/g);
const ergebnis = testData.match(/(?<=\), ).*(?=\))/g);

console.log(funk);
console.log(ergebnis);
// mit String
// const ergebnis = testData.match(/(?<=\), ").*(?="\)))/g);

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
