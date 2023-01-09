/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* index.js | Utility Routines | 22/12/2022 | Sree */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

/* When the window loads */
window.addEventListener("load", function() {
  fnLanguageShifter( 'idNav_R', btnLangIDs, 'btnLang', btnLabels );
  fnExecSequence();
});
/* - - - - - - - - */

window.fnWhatLang = () => {
  (LangNow === null) ? LangNow = 'Ka' : LangNow = localStorage.getItem('LangNow'); // Check for last lang, Default to Ka if null
  localStorage.setItem( 'LangNow', LangNow ); // Save to localStorage
  return LangNow;
}
/* - - - - - - - - */

window.btnLangIDs = [ 'En','Kn','Ta','Te' ];
window.btnLabels  = [ 'E', 'ಕ', 'த', 'తె' ];
window.LangNow    = '' // Global. Default to none
/* - - - - - - - - */

/* Create Language Shifter buttons */
window.fnLanguageShifter = function ( ParentDiv, ElementsList, ClassName, Labels ) {
  let target = document.getElementById(String(ParentDiv));
  let ActiveClass = ClassName+'On';
  ElementsList.forEach( (X, Y) => { // Y is just a counter
    var btn = document.createElement( 'button' );
    btn.id = X ; // ID for button
    btn.className = String(ClassName); //Add Element's Class
    (fnWhatLang()===ElementsList[Y]) ? btn.classList.add(String(ActiveClass)) : null; // Add Active classname
    btn.innerHTML = Labels[Y] ;
    /* Listen to LangBtns event */
    btn.addEventListener ( "click", function() {
      fnActive( this, ActiveClass );
      localStorage.setItem( 'LangNow', X ); // Save LangNow to localStorage
      fnToast( fnPickALangTxt(tsLangChanged), 1500 );
      fnExecSequence(); /* To individually handle a sequence */
    });
    target.appendChild(btn);
  });
}
/* - - - - - - - - */

/* Execution sequence run by fnLanguageShifter */
function fnExecSequence() {

  fnPick1Push2IDs([ 'tsPageTitle', 'tsNBTitle' ]); // Update HTML & Navbar
  if(document.getElementsByTagName('BODY')[0].id==='pgHome') {
    //check if I can use the url here above...
    fnFeedHome(); // home.js
    fnFeedForm(); // home.js
console.log('Now to run "fnUpdate_Dasaboard"...');
    fnUpdate_Dasaboard(); // heave.js
    } else {
      fnCreateTabs('TabsWrap', idTabIDs, 'aTab'); //Don't show Tabs on home
    }
    
    /* Common Functions to be executed */
    // TBD
}
/* - - - - - - - - */

/* Create Tabs from idTabIDs and add addEventListener */
window.fnCreateTabs = ( Parent, TabsIDList, Class ) => {
  document.getElementById(Parent).innerHTML=''; // Clear it first
  TabsIDList.forEach( (X, Y) => {
    var anchor = document.createElement("a");
    anchor.setAttribute( 'href',"/" + TabsIDList[Y].toLowerCase() + "/" );
    var tab = document.createElement("p");
    // var tab = document.createElement("div");
    anchor.id = X ; // Tab ID
    anchor.className = Class; // Tab Classes
    let tsVar = eval('ts'+TabsIDList[Y]); // Add 'ts' for string
    tab.innerHTML = fnPickALangTxt(tsVar); // Write labels
    anchor.appendChild(tab);
    document.getElementById(Parent).appendChild(anchor);
  });
  fnMarkThisTab(); // Check and mark the current URL's match
  /*- - - - */
  function fnMarkThisTab() { // Check and mark the current URL's match
    TabsIDList.forEach( X => {
      (URLHas(X.toLowerCase())) ? fnActive(document.getElementById(X), Class+'On') : null;
    })
  }
}
/* - - - - - - - - */

/* Picks up the string in current language-set and returns */
window.fnPickALangTxt = (arrOfTS) => {
  let Txt = '';
  Array.isArray(arrOfTS) ? arrOfTS.forEach( lang => { (fnWhatLang()===lang.la) ? ( Txt = lang.txt ) : null }) : console.log( arrOfTS + " is not an array" );
  return( Txt );
}
/* - - - - - - - - */

/* Pushes the picked stings to IDs in HTML page */
window.fnPick1Push2IDs = ( IDList ) => {
  /* Note: IDs in HTML are prefixed with 'ts' in literals JS */
  IDList.forEach( li => {
    document.getElementById(li.slice(2)).innerHTML = fnPickALangTxt( eval(li) );
  });
}
/* - - - - - - - - */

/* Check sibling-elements with the same className; mark 'this' as active. */
window.fnActive = (Element, ActivClass) => {
  let Class = Element.className.split(" ")[0]; // Get the first className
  Class ? document.querySelectorAll(`.${Class}`).forEach((Item) => { Item.classList.toggle((ActivClass) ? ActivClass : null, Element === Item) }) : null;
}
/* - - - - - - - - */

/* Toast Messages */
window.fnToast = (Msg, Timeout) => {
  const tDiv = document.createElement("div");
  tDiv.id = "idToast"; // For styling
  tDiv.className = "show"; // Add "show" class
  tDiv.innerText = Msg;
  document.body.appendChild(tDiv); // Append to body
  (Timeout) ? null : Timeout=2000; // 2 Sec if not specified
  setTimeout( function(){ tDiv.remove(); }, Timeout ); // Remove div
}
/* - - - - - - - - */

/* Returns the last segment of the current URL */
window.WhereamI = () => {
  const segments = new URL(window.location.href).pathname.split('/');
  const last = segments.pop() || segments.pop(); //Handle trailing slash
  console.log(last);
  return(last);
}
/* - - - - - - - - */

/* Check if URL has that string */
window.URLHas = (string) => {
  if ( window.location.href.indexOf(string) > 0 ) { return(true) }
  return(false);
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

/* Pushes the picked stings to IDs in HTML page */
window.fnValidateVarVal = (Var, Val) => {
  Array.isArray(Var) ? alert(Var + " is an array") : null;
  document.getElementById(Var).innerHTML = Val;
}
/* - - - - - - - - */