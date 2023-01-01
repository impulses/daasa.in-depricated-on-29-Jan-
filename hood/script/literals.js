/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* literals.js | Feed Literals | 22/12/2022 | Sree */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

/* When the window loads */
window.addEventListener("load", function() {
  fnAddLangBtns();
  fnFeedHTML();
  (document.getElementsByTagName('BODY')[0].id==='Home') ? fnFeedHome() : null;
  fnListen4mSubmit();
});
/* - - - - - - - - */

/* const myForm = document.forms.frmReg.elements;
console.log(myForm.em.placeholder);
myForm.em.placeholder= "you@email.com"; */

function fnListen4mSubmit() {
  const formElem = document.getElementById('frmSignUp');
  // const formElem = document.querySelector('form'); // Use this for all forms

(formElem) ? // Exists?
  formElem.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent GET
    new FormData(formElem); // Construct FormData object
  }) : null;

(formElem) ? // Exists?
  formElem.addEventListener('formdata', (e) => {
    const data = e.formData; // Get the form data from the event object
    // for (const value of data.values()) { console.log(value); }
    for (const pair of data.entries()) { console.log(`${pair[0]}, ${pair[1]}`);}
    const request = new XMLHttpRequest(); // submit the data via XHR
    request.open("POST", "/formHandler");
    request.send(data);
  }) : null;

}
/* - - - - - - - - */

/* Toast Messages */
async function fnShowToast(Msg) {
  const tDiv = document.createElement("div");
  tDiv.id = "idToast"; // For styling
  tDiv.className = "show"; // Add "show" class
  tDiv.innerText = Msg;
  document.body.appendChild(tDiv); // Append to body
  setTimeout( function(){ tDiv.remove(); }, 2000 ); // Remove div after 2 sec
}
/* - - - - - - - - */

let currLang = '' // Global. Default to none
const fnWhichLanguage = () => {
  (currLang === null) ? currLang = 'Ka' : currLang = localStorage.getItem('currLang'); // Check for last lang, default to Ka if null
  localStorage.setItem( 'currLang', currLang ); // Save to localStorage
  return currLang;
}
/* - - - - - - - - */

/* Picks up the string in current language set and returns */
const fnPickLangTxt = (litVar) => {
  let Txt = '';
  litVar.forEach(lang => { (fnWhichLanguage()===lang.la) ? (Txt=lang.txt) : null});
  return( Txt );
}
/* - - - - - - - - */

// రండి, కృతజ్ఞతతో చదవండి

/* - - - - - - - - */
const btnLang_ID = [ 'En','Ka','Ta','Te' ];
const btnLabel = [ 'E', 'ಕ', 'த', 'తె' ];
/* - - - - - - - - */

window.fnAddLangBtns = function fnAddLangBtns() {
  let target = document.getElementById('idNav_R'),  i = 0;
console.log("TBD: fnAddLangBtns and fnFeedHTML..."); 
  btnLang_ID.forEach( X => {
    var btn = document.createElement("button");
    btn.id = X ; // ID for button
    btn.className = 'btnLang'; // Btn Classes
    (fnWhichLanguage()===btnLang_ID[i]) ? btn.classList.add('Slctd') : null; // Check for the last saved language and 
    btn.innerHTML = btnLabel[i++] ;

    btn.addEventListener ( "click", function() { // Listen to LangBtns event
      fnActive(this); /* index.js */
      localStorage.setItem( 'currLang', X ); // Save currLang to localStorage
      // fnShowToast(`Language set to ${X}`);
      fnShowToast(fnPickLangTxt(litLangChanged));
      fnFeedHome(); // Update the page content
    });
    target.appendChild(btn);
  });
}
/* - - - - - - - - */

/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* Global string declarations */
let litNBTitle = [
  { la: 'En', txt: "Daasa Sāhitya Archive" },
  { la: 'Ka', txt: "ದಾಸ ಸಾಹಿತ್ಯ ಸಂಗ್ರಹ" },
  { la: 'Ta', txt: "தாச இலக்கியம் சேகரிப்பு" },
  { la: 'Te', txt: "దాస సాహిత్యం సేకరణ" }
]

let litPageTitle = [
  { la: 'En', txt: "Daasa । Crowdsourced Archive of Haridasa Compositions" },
  { la: 'Ka', txt: "ದಾಸ । ಸಮೂಹ ನಿರ್ವಹಿತ ಹರಿದಾಸ ಸಾಹಿತ್ಯಗಳ ಸಂಗ್ರಹ" },
  { la: 'Ta', txt: "தாச । குழு நிர்வகிக்கும் ஹரிதாஸ இலக்கியம் சேகரிப்பு" },
  { la: 'Te', txt: "దాస । సమూహం నిర్వహించిన హరిదాస సాహిత్యం సేకరణ" } ]
  
let strDscrptn = 'ದಾಸರ ಪದ, ಸುಳಾದಿ, ದೇವರನಾಮ ಮತ್ತು ಕೀರ್ತನೆಗಳ ಸಂಗ್ರಹ | Compiled Haridasa Sahitya';

let litLangChanged = [
  { la: 'En', txt: "Let's Read in English" },
  { la: 'Ka', txt: "ಕನ್ನಡದಲ್ಲಿ ಓದೋಣ" },
  { la: 'Ta', txt: "தமிழில் படிப்போம்" },
  { la: 'Te', txt: "తెలుగులో చదువుదాం"} ]

let litdbTableHdr = [
  { la: 'En', txt: "Dasaboard" },
  { la: 'Ka', txt: "ದಾಸ ಫಲಕ" },
  { la: 'Ta', txt: "தாச பலகை" },
  { la: 'Te', txt: "దాస పలక"} ]

let litdbSbTtl = [
  { la: 'En', txt: "Haridasas" },
  { la: 'Ka', txt: "ಹರಿದಾಸರು" },
  { la: 'Ta', txt: "ஹரிதாசர்கள்" },
  { la: 'Te', txt: "హరిదాసులు"} ]

let litdbWrkSbTtl = [
  { la: 'En', txt: "Masterworks" },
  { la: 'Ka', txt: "ಕೃತಿಗಳು" },
  { la: 'Ta', txt: "இலக்கியம்" },
  { la: 'Te', txt: "సాహిత్యం"} ]

let litPrelHdg = [
  { la: 'En', txt: "Prelude" },
  { la: 'Ka', txt: "ಮುನ್ನುಡಿ" },
  { la: 'Ta', txt: "முன்னுரை" },
  { la: 'Te', txt: "ఉపోద్ఘాతం"} ]

let litSbttlVid = [
  { la: 'En', txt: "Videos" },
  { la: 'Ka', txt: "ವೀಡಿಯೊಗಳು" },
  { la: 'Ta', txt: "வீடியோக்கள்" },
  { la: 'Te', txt: "వీడియోలు"} ]

let litSbttlVstr = [
  { la: 'En', txt: "Visitors" },
  { la: 'Ka', txt: "ಸಂದರ್ಶಕರು" },
  { la: 'Ta', txt: "பார்வையாளர்கள்" },
  { la: 'Te', txt: "సందర్శకులు"} ]

let litSbttlSbscrbrs = [
  { la: 'En', txt: "Subscribers" },
  { la: 'Ka', txt: "ಚಂದಾದಾರರು" },
  { la: 'Ta', txt: "சந்தாதாரர்கள்" },
  { la: 'Te', txt: "చందాదారులు"} ]

let litSbttlCntrbtr = [
  { la: 'En', txt: "Contributors" },
  { la: 'Ka', txt: "ಕೊಡುಗೆದಾರರು" },
  { la: 'Ta', txt: "பங்களிப்பாளர்கள்" },
  { la: 'Te', txt: "సహకారులు"} ]
// become a dasa: நீங்களும் தாசா ஆகுங்கள் : మీరు కూడా దాసా అవ్వండి : ನೀವೂ ದಾಸರಾಗಿ

// /* TBD: Update strPageTitle for a selected dasa/song */
  /* - - - - - - - - - - - - - - - - - - - - - - - - */


// let strDAASA = `Donate An Amazing Song for Archive`;
let strDAASA = `Duly Appreciate & Admire Sages Advise`;

let strShloka = `भग्न पृष्ठ कटि ग्रीवा बद्ध दृष्टिः अधोमुखी ।<br>कष्टेन लिखितम् शास्त्रम् यत्नेन परिपालय ॥`

let litPrelude =
  `<p>This is not just another lyrics listing website... This is the <strong>Crowdsourced Archive</strong> of <i>dAsa sAhitya</i>, where the knowledge has been poured in by contributors from across regions & across religions. The prupose is to spread the knowledge in 4 different languages.<br>
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

function fnFeedHTML() {
  
}

window.fnFeedHome = async function fnFeedHome() {
// words = codelines[i].split(" ");
  document.getElementsByTagName('title')[0].innerHTML = fnPickLangTxt(litPageTitle);
  document.querySelector('meta[name="description"]').setAttribute("content", strDscrptn);
  document.getElementById('Title').innerHTML = fnPickLangTxt(litNBTitle);
  document.getElementById('dbHdng').innerHTML = fnPickLangTxt(litdbTableHdr);

  document.getElementById('dbDasaSbttl').innerHTML = fnPickLangTxt(litdbSbTtl);
  document.getElementById('dbWrksSbttl').innerHTML = fnPickLangTxt(litdbWrkSbTtl);

  document.getElementById('hdgPrelude').innerHTML = fnPickLangTxt(litPrelHdg);

  //TBD
  document.getElementById('txtPrelude').innerHTML = litPrelude;

  document.getElementById('crdSbTtlVid').innerHTML = fnPickLangTxt(litSbttlVid);
  document.getElementById('crdSbTtlVstr').innerHTML = fnPickLangTxt(litSbttlVstr);
  document.getElementById('crdSbTtlSubs').innerHTML = fnPickLangTxt(litSbttlSbscrbrs);
  document.getElementById('crdSbTtlCntrbt').innerHTML = fnPickLangTxt(litSbttlCntrbtr);

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