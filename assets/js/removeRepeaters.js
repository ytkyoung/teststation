const removeRepeats = (str) => str.split(/(.)\1*/g).join('');

const result = removeRepeats('bookkeeper');
console.log(result);

const testData = `Test.assertEquals(removeRepeats("aaabbbccc"), "abc")
Test.assertEquals(removeRepeats("bookkeeper"), "bokeper")
Test.assertEquals(removeRepeats("nananana"), "nananana")
Test.assertEquals(removeRepeats("accddbccabadcabccdababaacbdaadcccbcaabaaddbabbaadd"), "acdbcabadcabcdababacbdadcbcabadbabad")
Test.assertEquals(removeRepeats("aabbcabdcddddacdccacbbcabadccbbaadcccbddacbdbabbbd"), "abcabdcdacdcacbcabadcbadcbdacbdbabd")
Test.assertEquals(removeRepeats("dacbaabacbabacabcabaabdccccbdbbcaadddacdbdbdacbada"), "dacbabacbabacabcababdcbdbcadacdbdbdacbada")
Test.assertEquals(removeRepeats("cbdbcbcccbdbbcaaaacacbcabddcdcddcccbdaabdacbdcabbd"), "cbdbcbcbdbcacacbcabdcdcdcbdabdacbdcabd")
Test.assertEquals(removeRepeats("cdbdcdccccbcbbcdabbbbcababccadccabdcacabbcaccdaccd"), "cdbdcdcbcbcdabcababcadcabdcacabcacdacd")
Test.assertEquals(removeRepeats("bacbdbdadbbbdacbddbdcbadddabbaadcbbdabdaabcdddbacd"), "bacbdbdadbdacbdbdcbadabadcbdabdabcdbacd")
Test.assertEquals(removeRepeats("daadadccbcacacbacdbbaabaadbaabadacdacadbacdcababbb"), "dadadcbcacacbacdbabadbabadacdacadbacdcabab")
Test.assertEquals(removeRepeats("bbaccaccbbabbaacbacadadaddbadddbaacbadbcbdaabbbaaa"), "bacacbabacbacadadadbadbacbadbcbdaba")
Test.assertEquals(removeRepeats("dbdabdccbcdccccbcdbbbcaccdacdacdcacadaddaddbcbdddb"), "dbdabdcbcdcbcdbcacdacdacdcacadadadbcbdb")
Test.assertEquals(removeRepeats("cdaaaabbccaccacbdabdbbccbbddddddcadcbbccbccdbaddac"), "cdabcacacbdabdbcbdcadcbcbcdbadac")
Test.assertEquals(removeRepeats("dcccccaacdacbbdaccbabaacddcdddabcadbaaccaabdcabdad"), "dcacdacbdacbabacdcdabcadbacabdcabdad")
Test.assertEquals(removeRepeats("bcccabddbbacbacacddbbddbbccbdddbcbcabdabdcbccdaddd"), "bcabdbacbacacdbdbcbdbcbcabdabdcbcdad")
Test.assertEquals(removeRepeats("bcacaabaadcbbdadcddcdaaaddcccdabdbbaddddbabdccabda"), "bcacabadcbdadcdcdadcdabdbadbabdcabda")
Test.assertEquals(removeRepeats("adacddabacdcbdbadcaacacdcdcdbcdcdabdabbadcbdacbdcd"), "adacdabacdcbdbadcacacdcdcdbcdcdabdabadcbdacbdcd")
Test.assertEquals(removeRepeats("dbbbbbcddacdbdaacdaaaccbccdccbcbcdabdbddacbcaaadaa"), "dbcdacdbdacdacbcdcbcbcdabdbdacbcada")
Test.assertEquals(removeRepeats("bdbdbacabcbbacbcaadbcbcbbdaddacbaacabdccadaaddadca"), "bdbdbacabcbacbcadbcbcbdadacbacabdcadadadca")
Test.assertEquals(removeRepeats("bbabccadacbbbaabddbbcadacddacdcccbacbdcbacbabcabaa"), "babcadacbabdbcadacdacdcbacbdcbacbabcaba")
Test.assertEquals(removeRepeats("cadaadcbccbcbbdcadbcdcbaacacbcbabbbadaddadcdcacaab"), "cadadcbcbcbdcadbcdcbacacbcbabadadadcdcacab")
Test.assertEquals(removeRepeats("adbccadacaabbbcdcaabbdbcbdbbcccbcbadcdddcccbbdcdab"), "adbcadacabcdcabdbcbdbcbcbadcdcbdcdab")
Test.assertEquals(removeRepeats("dbbdddaaadccabbddbbcccbddacccccaabbcdbdbdcdacdbada"), "dbdadcabdbcbdacabcdbdbdcdacdbada")
Test.assertEquals(removeRepeats("acccdbbbcbdbbbcbaaabcaacacbbcccadddacbbbabbacbccca"), "acdbcbdbcbabcacacbcadacbabacbca")
Test.assertEquals(removeRepeats("cccbadadcbccacdababbaabdbdcacadabdddcaaaabbaadacca"), "cbadadcbcacdabababdbdcacadabdcabadaca")
Test.assertEquals(removeRepeats("cdcbdbcadadbbdacbdddaaaddbddcaacdaabcbdccacddacbdd"), "cdcbdbcadadbdacbdadbdcacdabcbdcacdacbd")
Test.assertEquals(removeRepeats("bdccbadcddabaaccabbdbcdbabdaaddadcbdbaccbacbccdccc"), "bdcbadcdabacabdbcdbabdadadcbdbacbacbcdc")
Test.assertEquals(removeRepeats("ddacbcadcccaaddbccdbbcdaccabccdaabdbbcddcbbdaccdcd"), "dacbcadcadbcdbcdacabcdabdbcdcbdacdcd")
Test.assertEquals(removeRepeats("dccbccdbccdcbdcdbadcbbcabbbadbddaaaabdbacaacbdcadd"), "dcbcdbcdcbdcdbadcbcabadbdabdbacacbdcad")
Test.assertEquals(removeRepeats("accbccdbdaabbbacdcbadcccaccbcbdacaabdddaadbcbaabda"), "acbcdbdabacdcbadcacbcbdacabdadbcbabda")
Test.assertEquals(removeRepeats("aabcddbcadaacdccbdbcccadcaadcdcbaacdbbaababdbcbabb"), "abcdbcadacdcbdbcadcadcdcbacdbababdbcbab")
Test.assertEquals(removeRepeats("dccccccccbcacbbabccccbadadbdbdbaaabbccaccdddacbdab"), "dcbcacbabcbadadbdbdbabcacdacbdab")
Test.assertEquals(removeRepeats("abbddddcdcbcccadbccdcaadddacbddadcccbaacdcdbddccab"), "abdcdcbcadbcdcadacbdadcbacdcdbdcab")
Test.assertEquals(removeRepeats("dcdacdcbaabcbcbcbacdddabddcabddaaaaadcddcbbabaacbc"), "dcdacdcbabcbcbcbacdabdcabdadcdcbabacbc")
Test.assertEquals(removeRepeats("cbabcbbbbbdcadcdcadaddadbbbdadbcdabbdddacbbdbcadab"), "cbabcbdcadcdcadadadbdadbcdabdacbdbcadab")
Test.assertEquals(removeRepeats("aababacdcdcddacadcaddbbccbcbadccdadbbbaddbdaccbcba"), "ababacdcdcdacadcadbcbcbadcdadbadbdacbcba")
Test.assertEquals(removeRepeats("ddcccbcadbcbbdcdcbbddddcbcdcabcaabdabcbdaddcabcdbd"), "dcbcadbcbdcdcbdcbcdcabcabdabcbdadcabcdbd")
Test.assertEquals(removeRepeats("dbdadabbccacaaccdaccdbbdbdcacbacadcaabadbccbcbbabc"), "dbdadabcacacdacdbdbdcacbacadcabadbcbcbabc")
Test.assertEquals(removeRepeats("bbabbddbbadacaadddbddabcabbccddaacbbdbdbccdcdbbdad"), "babdbadacadbdabcabcdacbdbdbcdcdbdad")
Test.assertEquals(removeRepeats("cbdccccbccbacbcddbabdbabdabcadadbdbcbaddbcddcbdcdc"), "cbdcbcbacbcdbabdbabdabcadadbdbcbadbcdcbdcdc")
Test.assertEquals(removeRepeats("bdbcacdcddbcadbaadcbcbdbdbdacacdccabbcaadbabbadaac"), "bdbcacdcdbcadbadcbcbdbdbdacacdcabcadbabadac")
Test.assertEquals(removeRepeats("acaccbcccccaccddbdcbbacacbdccabddacabbdbdcacadddad"), "acacbcacdbdcbacacbdcabdacabdbdcacadad")
Test.assertEquals(removeRepeats("dcdddddcbccdaaaaadbbbabaabbddbadaadcdcabaabdccaaca"), "dcdcbcdadbababdbadadcdcababdcaca")
Test.assertEquals(removeRepeats("ddcdbcdcaddcaccbcdcaacbcddacadabacdddcbabdcddabaac"), "dcdbcdcadcacbcdcacbcdacadabacdcbabdcdabac")
Test.assertEquals(removeRepeats("bccbbaadbcbccddbdbaddaadbbbbbdcdaaddcbcccbbababadc"), "bcbadbcbcdbdbadadbdcdadcbcbababadc")
Test.assertEquals(removeRepeats("dcdabcdcbbdcbdddbccbcdacbccbbcdbdabbacdbbacacdadca"), "dcdabcdcbdcbdbcbcdacbcbcdbdabacdbacacdadca")
Test.assertEquals(removeRepeats("dbdbaaacdadbbcbdbcdccdaccaabbccdabbcadbaccbaadbdbb"), "dbdbacdadbcbdbcdcdacabcdabcadbacbadbdb")
Test.assertEquals(removeRepeats("ccdccbdcabdacdcdcdcbdbaccdcbbbdbaaddbcabbcccbbcaba"), "cdcbdcabdacdcdcdcbdbacdcbdbadbcabcbcaba")
Test.assertEquals(removeRepeats("bbbccabdcaddcbcadaddaabddaadabcaddcdacbadcadbcadaa"), "bcabdcadcbcadadabdadabcadcdacbadcadbcada")
Test.assertEquals(removeRepeats("dcadbbccadcbdaaacabacaaadbbdabdabccbcdbccabcbddabb"), "dcadbcadcbdacabacadbdabdabcbcdbcabcbdab")
Test.assertEquals(removeRepeats("cccdaadabdcabcdababacaddadbddbbcbbcdaaddcdccabbbda"), "cdadabdcabcdababacadadbdbcbcdadcdcabda")
Test.assertEquals(removeRepeats("aabcabbcdadcccbbdbcbcabdcbacacaabbabcbacbadddccddd"), "abcabcdadcbdbcbcabdcbacacababcbacbadcd")
Test.assertEquals(removeRepeats("cdbcdacdabdadbddbcbaabadcdccbcccbbacbadccdbccadaba"), "cdbcdacdabdadbdbcbabadcdcbcbacbadcdbcadaba")`;

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
