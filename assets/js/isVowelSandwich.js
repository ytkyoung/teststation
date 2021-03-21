// function isVowelSandwich(str) {
//   return !!(str.length === 3 && str.match(/[^aeiuo][aeiou][^aeiuo]/g));
// }

const isVowelSandwich = (str) => !!(str.length === 3 && str.match(/[^aeiuo][aeiou][^aeiuo]/g));

const result = isVowelSandwich('cat');
console.log(result);

const testData = `Test.assertEquals(isVowelSandwich("cat"), true)
Test.assertEquals(isVowelSandwich("ear"), false)
Test.assertEquals(isVowelSandwich("bake"), false)
Test.assertEquals(isVowelSandwich("fai"), false)
Test.assertEquals(isVowelSandwich("eik"), false)
Test.assertEquals(isVowelSandwich("nel"), true)
Test.assertEquals(isVowelSandwich("lea"), false)
Test.assertEquals(isVowelSandwich("rur"), true)
Test.assertEquals(isVowelSandwich("zuh"), true)
Test.assertEquals(isVowelSandwich("iiq"), false)
Test.assertEquals(isVowelSandwich("eir"), false)
Test.assertEquals(isVowelSandwich("niv"), true)
Test.assertEquals(isVowelSandwich("xap"), true)
Test.assertEquals(isVowelSandwich("xuqrc"), false)
Test.assertEquals(isVowelSandwich("rvp"), false)
Test.assertEquals(isVowelSandwich("suj"), true)
Test.assertEquals(isVowelSandwich("aeo"), false)
Test.assertEquals(isVowelSandwich("nay"), true)
Test.assertEquals(isVowelSandwich("cis"), true)
Test.assertEquals(isVowelSandwich("leb"), true)
Test.assertEquals(isVowelSandwich("aux"), false)
Test.assertEquals(isVowelSandwich("vii"), false)
Test.assertEquals(isVowelSandwich("faz"), true)
Test.assertEquals(isVowelSandwich("taf"), true)
Test.assertEquals(isVowelSandwich("fek"), true)
Test.assertEquals(isVowelSandwich("tig"), true)
Test.assertEquals(isVowelSandwich("hof"), true)
Test.assertEquals(isVowelSandwich("yiy"), true)
Test.assertEquals(isVowelSandwich("ray"), true)
Test.assertEquals(isVowelSandwich("e"), false)
Test.assertEquals(isVowelSandwich("oot"), false)
Test.assertEquals(isVowelSandwich("oel"), false)
Test.assertEquals(isVowelSandwich("cip"), true)
Test.assertEquals(isVowelSandwich("faw"), true)
Test.assertEquals(isVowelSandwich("kow"), true)
Test.assertEquals(isVowelSandwich("ter"), true)
Test.assertEquals(isVowelSandwich("qid"), true)
Test.assertEquals(isVowelSandwich("mix"), true)
Test.assertEquals(isVowelSandwich("eoo"), false)
Test.assertEquals(isVowelSandwich("fan"), true)
Test.assertEquals(isVowelSandwich("zoc"), true)
Test.assertEquals(isVowelSandwich("rf"), false)
Test.assertEquals(isVowelSandwich("adt"), false)
Test.assertEquals(isVowelSandwich("sao"), false)
Test.assertEquals(isVowelSandwich("yur"), true)
Test.assertEquals(isVowelSandwich("bow"), true)
Test.assertEquals(isVowelSandwich("aez"), false)
Test.assertEquals(isVowelSandwich("sud"), true)
Test.assertEquals(isVowelSandwich("nacr"), false)
Test.assertEquals(isVowelSandwich("phlsf"), false)
Test.assertEquals(isVowelSandwich("iah"), false)
Test.assertEquals(isVowelSandwich("to"), false)
Test.assertEquals(isVowelSandwich("lib"), true)
Test.assertEquals(isVowelSandwich("oiu"), false)
Test.assertEquals(isVowelSandwich("uaw"), false)
Test.assertEquals(isVowelSandwich("zaw"), true)
Test.assertEquals(isVowelSandwich("sow"), true)
Test.assertEquals(isVowelSandwich("iok"), false)
Test.assertEquals(isVowelSandwich("xoa"), false)
Test.assertEquals(isVowelSandwich("lof"), true)
Test.assertEquals(isVowelSandwich("suq"), true)
Test.assertEquals(isVowelSandwich("sev"), true)
Test.assertEquals(isVowelSandwich("hek"), true)
Test.assertEquals(isVowelSandwich("ryxkk"), false)
Test.assertEquals(isVowelSandwich("csgt"), false)
Test.assertEquals(isVowelSandwich("rig"), true)
Test.assertEquals(isVowelSandwich("rur"), true)
Test.assertEquals(isVowelSandwich("luv"), true)
Test.assertEquals(isVowelSandwich("rou"), false)
Test.assertEquals(isVowelSandwich("kuy"), true)
Test.assertEquals(isVowelSandwich("kax"), true)
Test.assertEquals(isVowelSandwich("qnran"), false)
Test.assertEquals(isVowelSandwich("aoi"), false)
Test.assertEquals(isVowelSandwich("uis"), false)
Test.assertEquals(isVowelSandwich("dey"), true)
Test.assertEquals(isVowelSandwich("tia"), false)
Test.assertEquals(isVowelSandwich("dawjq"), false)
Test.assertEquals(isVowelSandwich("bjt"), false)
Test.assertEquals(isVowelSandwich("rag"), true)
Test.assertEquals(isVowelSandwich("iee"), false)
Test.assertEquals(isVowelSandwich("gic"), true)
Test.assertEquals(isVowelSandwich("iui"), false)
Test.assertEquals(isVowelSandwich("rap"), true)
Test.assertEquals(isVowelSandwich("qer"), true)
Test.assertEquals(isVowelSandwich("qiv"), true)
Test.assertEquals(isVowelSandwich("dod"), true)
Test.assertEquals(isVowelSandwich("hom"), true)
Test.assertEquals(isVowelSandwich("eio"), false)
Test.assertEquals(isVowelSandwich("xea"), false)
Test.assertEquals(isVowelSandwich("voo"), false)
Test.assertEquals(isVowelSandwich("res"), true)
Test.assertEquals(isVowelSandwich("zeq"), true)
Test.assertEquals(isVowelSandwich("rol"), true)
Test.assertEquals(isVowelSandwich("pee"), false)
Test.assertEquals(isVowelSandwich("iee"), false)
Test.assertEquals(isVowelSandwich("rig"), true)
Test.assertEquals(isVowelSandwich("eow"), false)
Test.assertEquals(isVowelSandwich("oey"), false)
Test.assertEquals(isVowelSandwich("pux"), true)
Test.assertEquals(isVowelSandwich("sij"), true)
Test.assertEquals(isVowelSandwich("tak"), true)
Test.assertEquals(isVowelSandwich("uim"), false)
Test.assertEquals(isVowelSandwich("zia"), false)`;

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
