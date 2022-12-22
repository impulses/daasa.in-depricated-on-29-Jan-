/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* feeds.js | String Literals  | 22/12/2022 | Sree */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

/* When the window loads */
window.addEventListener("load", function() {
  fnAddLangBtns();
  fnFeedHome();
});
/* - - - - - - - - */

window.fnAddLangBtns = function fnAddLangBtns() {

  const btnIDs = [ 'langEn','langKa','langTa','langTe' ];
  const btnTitles = [ 'E', 'ಕ', 'த', 'తె' ];
  const btnClr = [ 'clrEn', 'clrKa', 'clrTa', 'clrTe' ];
  // `${strPageTitle}`
  var target = document.getElementById('idNav_R');
  let i = 0;


  btnIDs.forEach( X => {
    var btn = document.createElement("button");
    // btn.id = X.padStart(7, 'lang-'); /* Pads; e.g. 8 with '08' */
    btn.id = X ;

    btn.className = `btnLang GridC ${btnClr[i]}`;
    // btn.setAttribute('onclick', 'fnActive(this);');

    btn.innerHTML = btnTitles[i++] ;
    btn.addEventListener ( "click", function() {
    // btn.addEventListener ( "blur", function() {
      fnActive(this);
      console.log(`Change lang to ${X}` );
    });
    (i===2) ? btn.classList.add('Slctd') : null;
    target.appendChild(btn);
  });
}
/* - - - - - - - - */

window.fnFeedHome = function fnFeedHome() {
  // let header = "Templates Literals";
  // let html = `<h2>${header}</h2><ul>`;
  // document.getElementById("demo").innerHTML = html;

  document.getElementsByTagName('title')[0].innerHTML = "TBD";
}
/* - - - - - - - - */