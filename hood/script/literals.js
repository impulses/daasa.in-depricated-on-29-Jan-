/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* literals.js | Feed Literals | 22/12/2022 | Sree */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

/* Global string declarations */
let strNBTitle = `ದಾಸ ವಿಶೇಷ`;
let strPageTitle = `${strNBTitle} | ಹರಿದಾಸ ಸಾಹಿತ್ಯಗಳ ಸಮೂಹ ನಿರ್ವಹಿತ ಸಂಗ್ರಹತಾಣ`;
/* TBD: Update strPageTitle for a selected dasa/song */

let strDscrptn = 'ದಾಸರ ಪದ, ಸುಳಾದಿ, ದೇವರನಾಮ ಮತ್ತು ಕೀರ್ತನೆಗಳ ಸಂಗ್ರಹ | Compiled Haridasa Sahitya';

/* When the window loads */
window.addEventListener("load", function() {
  fnAddLangBtns();
  fnFeedHome();
});
/* - - - - - - - - */

const btnLang_ID = [ 'langEn','langKa','langTa','langTe' ];
const btnTitles = [ 'E', 'ಕ', 'த', 'తె' ];
// రండి, కృతజ్ఞతతో చదవండి
/* - - - - - - - - */
window.fnAddLangBtns = function fnAddLangBtns() {

  let target = document.getElementById('idNav_R'),  i = 0;
  btnLang_ID.forEach( X => {
    var btn = document.createElement("button");
    // btn.id = X.padStart(7, 'lang-'); /* Pads; e.g. 8 with '08' */
    btn.id = X ;
    btn.className = 'btnLang GridC';
    btn.innerHTML = btnTitles[i++] ;
    btn.addEventListener ( "click", function() {
      fnActive(this); /* index.js */
      console.log(`Change lang to ${X}` );
    });
    (i===2) ? btn.classList.add('Slctd') : null;
    target.appendChild(btn);
  });
}
/* - - - - - - - - */

window.fnFeedHome = function fnFeedHome() {

  // let html = `<h2>${header}</h2><ul>`;
  // document.getElementById("demo").innerHTML = html;
  document.getElementsByTagName('title')[0].innerHTML = strPageTitle;
document.querySelector('meta[name="description"]').setAttribute("content", strDscrptn);

  document.getElementById('Title').innerHTML = strNBTitle;
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