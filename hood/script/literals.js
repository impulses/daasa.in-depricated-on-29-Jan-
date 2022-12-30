/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* literals.js | Feed Literals | 22/12/2022 | Sree */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

/* Global string declarations */
let litNBTitle = `ದಾಸ ಸಾಹಿತ್ಯ ಸಂಗ್ರಹ`; /* `ದಾಸ ವಿಶೇಷ` */
// let litNBTitle = `ದಾಸ ಸಾಹಿತ್ಯ ಸಂಗ್ರಹ`; /* `ದಾಸ ವಿಶೇಷ` */
// let litNBTitle = `ದಾಸ ಸಾಹಿತ್ಯ ಸಂಗ್ರಹ`; /* `ದಾಸ ವಿಶೇಷ` */
// let litNBTitle = `ದಾಸ ಸಾಹಿತ್ಯ ಸಂಗ್ರಹ`; /* `ದಾಸ ವಿಶೇಷ` */

let strPageTitle = `${litNBTitle} | ಹರಿದಾಸ ಸಾಹಿತ್ಯಗಳ ಸಮೂಹ ನಿರ್ವಹಿತ ಸಂಗ್ರಹತಾಣ`;
/* TBD: Update strPageTitle for a selected dasa/song */
let strDscrptn = 'ದಾಸರ ಪದ, ಸುಳಾದಿ, ದೇವರನಾಮ ಮತ್ತು ಕೀರ್ತನೆಗಳ ಸಂಗ್ರಹ | Compiled Haridasa Sahitya';

let litdbTableHdr = 'Dasaboard'
// let strDAASA = `Donate An Amazing Song for Archive`;
let strDAASA = `Duly Appreciate & Admire Sages Advise`;

let strShloka = `भग्न पृष्ठ कटि ग्रीवा बद्ध दृष्टिः अधोमुखी ।<br>कष्टेन लिखितम् शास्त्रम् यत्नेन परिपालय ॥`

let litPrelude =
  `<p>This is not just another website for <i>dAsa sAhitya</i>; this is the <strong>Crowdsourced Archive</strong> of dAsa sAhitya, where the knowledge has been poured in from across barriers.<br>
  <p>Intrigued and interested souls have contributed their part, either by adding a lyric or by sending a video they have sung in.</p><br>
  <p>The task of creating such a repository can't just be a hobby but a service to Daasas, to impart their valuable work in <i>an easily available, neater, organized, convenient and impeccable</i> form.</p><br>
  <p class='var(--Purple)'>You too could be a <b style='color: var(--Maroon)'>'DAASA'</b>, if you <i style='color: var(--Maroon)'>${strDAASA}</i>.</p><br>
  <p>The works in the available collection have been <i>Curiously Curated</i>, vetted and transliterated (popular works first, rare in near future). Although the correction of inaccuracies is attempted, there may have been a few grammatical as well as linguistic errors left by oversight or by my ignorance. Proficients should help correct them.<br>
  <p>The task seems very challenging but immensely stimulating; which reminded the below quoted epigram (subhashita), which is often seen on Sanskrit palm-manuscript copies. This epigram summarizes the hardwork required to write a document and a demand to preserve them carefully.</p><br>
  <div class="Shloka">${strShloka}</div>
  <div class="Grid Cntr_V">
  <code>With strained buttocks, back and neck; with a focused downward gaze ।<br> this scripture was written with difficulty; preserve it with commitment ॥</code><br>
  </div>
  <p>Let's join hands in building Daasa Saahitya archive; together. You too can contribute by providing your favorite <i>kriti</i>, or by transliterating existing works into the language you speak or your'e proficient with. Only you can help increase verified translations for your language! You can support this cause by contributing and spreading nice words about this space.</p>`;

  // let litPrelude_Ka = `ದಾನವರಾಗಬೇಡಿ, ದಾನವ ಮಾಡಿ`

/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* When the window loads */
window.addEventListener("load", function() {
  fnAddLangBtns();
  fnFeedHome();
});
/* - - - - - - - - */

let currLang = '' // Default to none

const fnDetectLang = () => {
  (currLang === null) ? currLang = 'Ka' : currLang = localStorage.getItem('currLang'); // Check for last lang, default to Ka if null
  localStorage.setItem( 'currLang', currLang ); // Save to localStorage
  return currLang;
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
    btn.id = X ;
    btn.className = 'btnLang GridC';
    (fnDetectLang()===btnLang_ID[i]) ? btn.classList.add('Slctd') : null;
    btn.innerHTML = btnLabel[i++] ;

    btn.addEventListener ( "click", function() {
      fnActive(this); /* index.js */
      localStorage.setItem( 'currLang', X ); //Save to localStorage
      console.log(`Language set to ${X}` );
    });
    target.appendChild(btn);
  });
}
/* - - - - - - - - */

window.fnFeedHome = function fnFeedHome() {
  // let html = `<h2>${header}</h2><ul>`;
  // document.getElementById("demo").innerHTML = html;
  document.getElementsByTagName('title')[0].innerHTML = strPageTitle;
  document.querySelector('meta[name="description"]').setAttribute("content", strDscrptn);

  document.getElementById('Title').innerHTML = litNBTitle;
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