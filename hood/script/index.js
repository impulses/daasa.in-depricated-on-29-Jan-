/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* index.js | Utility Routines | 22/12/2022 | Sree */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

/* When the window loads */
window.addEventListener("load", function() {
  // fnDimensions('WxH');
  fnAddLangBtns();
  fnDoTitles();
});
/* - - - - - - - - */

window.btnLang_ID = [ 'En','Ka','Ta','Te' ];
window.btnLabel   = [ 'E', 'ಕ', 'த', 'తె' ];
let    currLang   = '' // Global. Default to none
/* - - - - - - - - */

window.fnWhatLang = () => {
  (currLang === null) ? currLang = 'Ka' : currLang = localStorage.getItem('currLang'); // Check for last lang, default to Ka if null
  localStorage.setItem( 'currLang', currLang ); // Save to localStorage
  return currLang;
}
/* - - - - - - - - */

window.fnAddLangBtns = () => {
  let target = document.getElementById('idNav_R'),  i = 0;
  btnLang_ID.forEach( X => {
    var btn = document.createElement("button");
    btn.id = X ; // ID for button
    btn.className = 'btnLang'; // Btn Classes
    (fnWhatLang()===btnLang_ID[i]) ? btn.classList.add('btnOn') : null; // Check for the last saved language and 
    btn.innerHTML = btnLabel[i++] ;
    /* Listen to LangBtns event */
    btn.addEventListener ( "click", function() {
      fnActive(this, 'btnOn');
      localStorage.setItem( 'currLang', X ); // Save currLang to localStorage
      fnShowToast( fnPickLangTxt(tsLangChanged) );
      fnDoTitles(); // Update the HTML & Navbar
      /* Individually handling page content... */
      // (document.getElementsByTagName('BODY')[0].id==='Home') ? fnFeedHome() : null; // Update the 'Home' page content
      // (document.getElementsByTagName('BODY')[0].id!='Home') ? fnDoTabLabels() : null; // Update the 'NON-Home' page TABS content
    });
    target.appendChild(btn);
  });
}
/* - - - - - - - - */

/* Picks up the string in current language set and returns */
window.fnPickLangTxt = (litVar) => {
  let Txt = '';
  Array.isArray(litVar) ? litVar.forEach(lang => { (fnWhatLang()===lang.la) ? (Txt=lang.txt) : null}) : console.log( litVar + ' is not an array');
  return( Txt );
}
/* - - - - - - - - */

/* Pushes the picked stings to IDs in HTML page */
window.fnPush2IDs = ( IDList ) => {
  /* Note: NBTitle (in HTML) = (tsNBTitle-ts) (in JS) */
  IDList.forEach( li => { document.getElementById(li.slice(2)).innerHTML = fnPickLangTxt(eval(li)); /* console.log(fnPickLangTxt(eval(li))); */ });
}
/* - - - - - - - - */

/* Picks up title strings from ts-array */
window.fnDoTitles = () => { fnPush2IDs([ 'tsPageTitle', 'tsNBTitle' ]); }
/* - - - - - - - - */

/* fnActive | Looks for elements with the same className siblings, marks 'this' element as active. */
window.fnActive = (Element, ActivClass) => {
  let Class = Element.className.split(" ")[0]; // Get the first className
  Class ? document.querySelectorAll(`.${Class}`).forEach((Item) => { Item.classList.toggle((ActivClass) ? ActivClass : null, Element === Item) }) : null;
}
/* - - - - - - - - */

/* Toast Messages */
window.fnShowToast = function fnShowToast(Msg) {
  const tDiv = document.createElement("div");
  tDiv.id = "idToast"; // For styling
  tDiv.className = "show"; // Add "show" class
  tDiv.innerText = Msg;
  document.body.appendChild(tDiv); // Append to body
  setTimeout( function(){ tDiv.remove(); }, 2000 ); // Remove div after 2 sec
}
/* - - - - - - - - */

/* fnDimensions('ID') – Shows window size */
/* const fnDimensions = (Ele) => {
  let WH = ( window.innerWidth+'x' + window.innerHeight )
  document.getElementById('WxH').innerHTML =  WH;
  window.addEventListener( 'resize', function() {
    fnDimensions(Ele);
  } );
} */
/* - - - - - - - - */