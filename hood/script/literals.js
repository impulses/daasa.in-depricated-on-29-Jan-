/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* literals.js | Feed Literals | 22/12/2022 | Sree */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

/* When the window loads */
window.addEventListener("load", function() {
  fnAddLangBtns();
  fnFeedHome();
  fnListen4mSubmit();
});
/* - - - - - - - - */

const formElem = document.querySelector('form');

function fnListen4mSubmit() {
  formElem.addEventListener('submit', (e) => {
    e.preventDefault();// on form submission, prevent default
    new FormData(formElem); // construct a FormData object, which fires the formdata event
  });
  
  formElem.addEventListener('formdata', (e) => {
    // console.log('"Submit" Clicked');
    const data = e.formData; // Get the form data from the event object
    // for (const value of data.values()) { console.log(value); }
    for (const pair of data.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }
    const request = new XMLHttpRequest(); // submit the data via XHR
    request.open("POST", "/formHandler");
    request.send(data);
  });
}
/* - - - - - - - - */

async function fnShowToast(strToasMsg) {

  const tDiv = document.createElement("div");
  tDiv.id = "idToast";
  tDiv.className = "show"; // Add the "show" class to DIV
  tDiv.innerText = strToasMsg;
  document.body.appendChild(tDiv); // Append to body:
  
  // var x = document.getElementById("idToast");
  // x.className = "show"; // Add the "show" class to DIV
  // x.innerHTML = strToasMsg;
  // After 3 seconds, remove the show class from DIV
  setTimeout( function(){
    tDiv.className = tDiv.className.replace("show", "");
    tDiv.remove();
  }, 2000 );
}
/* - - - - - - - - */

let currLang = '' // Default to none

const fnWhichLanguage = () => {
  (currLang === null) ? currLang = 'Ka' : currLang = localStorage.getItem('currLang'); // Check for last lang, default to Ka if null
  localStorage.setItem( 'currLang', currLang ); // Save to localStorage
  return currLang;
}
/* - - - - - - - - */

/* Picks up the string in current language set and returns */
const fnPickItInCurrLang = (litVariable) => {
  let itemPicked = '';
  litVariable.AllValues.forEach( lng => { (fnWhichLanguage()===lng.la) ? (itemPicked = lng.txt) : null; })
  // console.log("itemPicked="+itemPicked);
  return( itemPicked );
}
/* - - - - - - - - */

// రండి, కృతజ్ఞతతో చదవండి

/* - - - - - - - - */
const btnLang_ID = [ 'En','Ka','Ta','Te' ];
// const btnLang_ID = [ 'langEn','langKa','langTa','langTe' ];
const btnLabel = [ 'E', 'ಕ', 'த', 'తె' ];

window.fnAddLangBtns = function fnAddLangBtns() {
  let target = document.getElementById('idNav_R'),  i = 0;

  btnLang_ID.forEach( X => {
    var btn = document.createElement("button");
    // btn.id = X.padStart(7, 'lang-'); /* Pads; e.g. 8 with '08' */
    btn.id = X ; // ID for button
    btn.className = 'btnLang'; // Btn Classes
    (fnWhichLanguage()===btnLang_ID[i]) ? btn.classList.add('Slctd') : null; // Check for the last saved language and 
    btn.innerHTML = btnLabel[i++] ;

    btn.addEventListener ( "click", function() { // Listen to LangBtns event
      fnActive(this); /* index.js */
      localStorage.setItem( 'currLang', X ); // Save currLang to localStorage
      fnShowToast(`Language set to ${X}\nCorrect the animation later...`);
      fnFeedHome(); // Update the page content
    });
    target.appendChild(btn);
  });
}
/* - - - - - - - - */

/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* Global string declarations */
let litNBTitle = { "AllValues": [
  { "la": "En", "txt": "Daasa Saahitya Collection" },
  { "la": "Ka", "txt": "ದಾಸ ಸಾಹಿತ್ಯ ಸಂಗ್ರಹ" },
  { "la": "Ta", "txt": "தாச இலக்கியம் சேகரிப்பு" },
  { "la": "Te", "txt": "దాస సాహిత్యం సేకరణ" } ]}

let litPageTitle = { "AllValues": [
  { "la": "En", "txt": " Daasa । Crowdsourced Collection of Haridasa Compositions" },
  { "la": "Ka", "txt": " ದಾಸ । ಸಮೂಹ ನಿರ್ವಹಿತ ಹರಿದಾಸ ಸಾಹಿತ್ಯಗಳ ಸಂಗ್ರಹ" },
  { "la": "Ta", "txt": "தாச । குழு நிர்வகிக்கும் ஹரிதாஸ இலக்கியம் சேகரிப்பு" },
  { "la": "Te", "txt": "దాస । సమూహం నిర్వహించిన హరిదాస సాహిత్యం సేకరణ" } ]}
// குழு நிர்வகிக்கும் சேகரிப்பு
//கூட்டம் நிர்வகிக்கப்பட்டது ஹரிதாச இலக்கியங்களின் தொகுப்பு
  
// /* TBD: Update strPageTitle for a selected dasa/song */
  /* - - - - - - - - - - - - - - - - - - - - - - - - */

let strDscrptn = 'ದಾಸರ ಪದ, ಸುಳಾದಿ, ದೇವರನಾಮ ಮತ್ತು ಕೀರ್ತನೆಗಳ ಸಂಗ್ರಹ | Compiled Haridasa Sahitya';

let litdbTableHdr = 'Dasaboard'
// let strDAASA = `Donate An Amazing Song for Archive`;
let strDAASA = `Duly Appreciate & Admire Sages Advise`;

let strShloka = `भग्न पृष्ठ कटि ग्रीवा बद्ध दृष्टिः अधोमुखी ।<br>कष्टेन लिखितम् शास्त्रम् यत्नेन परिपालय ॥`

let litPrelude =
  `<p>This is not just another website for <i>dAsa sAhitya</i>; this is the <strong>Crowdsourced Archive</strong> of dAsa sAhitya, where the knowledge has been poured in from across barriers.<br>
  <p>Intrigued and interested souls have contributed their part, either by adding a lyric or by sending a video they have sung in.</p><br>
  <p>The task of creating such a repository can't just be a hobby but a service to Daasas, to impart their valuable work in <i>an easily available, neater, organized, convenient and impeccable</i> form.</p><br>
  <p class='var(--Purple)'>You too become a <b style='color: var(--Maroon)'>'DAASA'</b>, if you <i style='color: var(--Maroon)'>${strDAASA}</i>.</p><br>
  <p>The works in the available collection have been <i>Curiously Curated</i>, vetted and transliterated (popular works first, rare in near future). Although the correction of inaccuracies is attempted, there may have been a few grammatical as well as linguistic errors left by oversight or by my ignorance. Proficients should help correct them.<br>
  <p>The task seems very challenging but immensely stimulating; which reminded the below quoted epigram (subhashita), which is often seen on Sanskrit palm-manuscript copies. This epigram summarizes the hardwork required to write a document and a demand to preserve them carefully.</p><br>
  <div class="Shloka">${strShloka}</div>
  <div class="Grid Cntr_V">
  <code>With strained buttocks, back and neck; with a focused downward gaze ।<br> this scripture was written with difficulty; preserve it with commitment ॥</code><br>
  </div>
  <p>Let's join hands in building Daasa Saahitya archive; together. You too can contribute by providing your favorite <i>kriti</i>, or by transliterating existing works into the language you speak or your'e proficient with. Only you can help increase verified translations for your language! You can support this cause by contributing and spreading nice words about this space.</p>`;

  // let litPrelude_Ka = `ದಾನವರಾಗಬೇಡಿ, ದಾನವ ಮಾಡಿ`

/* - - - - - - - - - - - - - - - - - - - - - - - - */

window.fnFeedHome = async function fnFeedHome() {
// words = codelines[i].split(" ");
  document.getElementsByTagName('title')[0].innerHTML = fnPickItInCurrLang(litPageTitle);
  document.querySelector('meta[name="description"]').setAttribute("content", strDscrptn);

  document.getElementById('Title').innerHTML = fnPickItInCurrLang(litNBTitle);

  // litNBTitle.NBTitle.forEach( xLa => {
  //   // console.log(xLa.txt);
  //   (fnWhichLanguage()===xLa.la) ? (document.getElementById('Title').innerHTML = xLa.txt) : null;
  // });
  document.getElementById('dbHdng').innerHTML = litdbTableHdr;

  document.getElementById('txtPrelude').innerHTML = litPrelude;
}
/* - - - - - - - - */

// const fnX = (Ele) => { console.log(Ele); }
/* - - - - - - - - */

function hasKannadaChar(str) {
  return /[\u0C80-\u0CFF]/.test(str);
}
/* - - - - - - - - */

/* const studentTemplate = (data) => {
  return `
    <article>
      <h3>${data.name} is a student</h3>
      <p>blog: ${data.blogUrl}</p>
    </article>
  `;
} */

// https://wesbos.com/tagged-template-literals

// Tamil Range: 0B80–0BFF
// Telugu Range: 0C00–0C7F
// Kannada Range: 0C80–0CFF