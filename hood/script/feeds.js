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

  const btnIDs = [ 'En','Ka','Ta','Te' ];
  const btnTitles = [ 'E', 'ಕ', 'த', 'తె' ];
  const btnClr = [ 'clrEn', 'clrKa', 'clrTa', 'clrTe' ];
  // `${strPageTitle}`
  var target = document.getElementById('idNav_R');
  let i = 0;


  btnIDs.forEach( X => {
    var btn = document.createElement("button");
    btn.id = 'lang-' + X ;
    // btn.id = X.padStart(7, 'lang-');

    btn.className = `btnLang GridC ${btnClr[i]}`;
    // btn.className = `'btnLang GridC'`;
    // btn.innerHTML = X ;
    btn.innerHTML = btnTitles[i++] ;
    btn.addEventListener ( "click", function() {
      alert(`Change lang to ${X}` )
    });
    target.appendChild(btn);
  });

  // 2. Append somewhere
  console.log( target )

  // 3. Add event handler
}
/* - - - - - - - - */

window.fnFeedHome = function fnFeedHome() {
  // let header = "Templates Literals";
  // let html = `<h2>${header}</h2><ul>`;
  // document.getElementById("demo").innerHTML = html;


  document.getElementsByTagName('title')[0].innerHTML = "Hello World!";
}
/* - - - - - - - - */