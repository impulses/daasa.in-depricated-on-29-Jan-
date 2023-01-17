/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* index.js | Utility Routines | 22/12/2022 | Sree */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

/* When the window loads */
window.addEventListener("load", function() {
  fnWhichLang();
  fnSwitchLang( 'idNav_R', btnLangIDs, 'btnLang', btnLabels );
  fnExecSequence();
});
/* - - - - - - - - */

const btnLangIDs = [ 'En','Kn','Ta','Te' ];
const btnLabels  = [ 'E', 'ಕ', 'த', 'తె' ];
let   LangNow    = '' // Global. Default to none
/* - - - - - - - - */

// Separate this functionality to just check. Set lang shoudl be in another function
window.fnWhichLang = () => {
  LangNow = localStorage.getItem('LangNow');
  if( LangNow == null ) {
    LangNow = 'Kn';
    localStorage.setItem( 'LangNow', LangNow ) // Set Kn default
  }
  return LangNow;
}
/* - - - - - - - - */

/* Create Language Shifter buttons */
window.fnSwitchLang = function ( ParentDiv, ElementsList, ClassName, Labels ) {
  let target = document.getElementById(String(ParentDiv));
  let ActiveClass = ClassName+'On';
  ElementsList.forEach( (X, Y) => { // Y is just a counter
    var btn = document.createElement( 'button' );
    btn.id = X ; // ID for button
    btn.className = String(ClassName); //Add Element's Class
    (fnWhichLang()===ElementsList[Y]) ? btn.classList.add(String(ActiveClass)) : null; // Add Active classname
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

/* Execution sequence run by fnSwitchLang */
function fnExecSequence() {
  // Update HTML & Navbar for all pages
  fnPick1Push2IDs([ 'tsPageTitle', 'tsNBTitle' ]);
  // let H = document.getElementById('pgHome')
  if( WhereAmI() == '' || WhereAmI()==null ){
    // No Tabs in home
    fnFeedHome(); // home.js
    fnFeedForm(); // home.js
    fnUpdate_Dasaboard(); // heave.js
  }
  // else if( WhereAmI() == 'garlands' || 'gems'|| 'favs' ){
  //   fnCreateTabs('TabsWrap', idTabIDs, 'aTab');
  // }
  // URLHas('garlands') ? console.log('URL has garlands') : null;
  if( WhereAmI()=='garlands' ){
// console.log('garlands')
    fnCreateTabs('TabsWrap', idTabIDs, 'aTab');
    // fnAuth_N_Wrks_Tbl(); //garlands //this gave kirik opening
  }
  else if( WhereAmI()=='gems' ){
// console.log('gems')
    fnCreateTabs('TabsWrap', idTabIDs, 'aTab');
  }
  else if( WhereAmI()=='favs' ){
// console.log('favs')
    fnCreateTabs('TabsWrap', idTabIDs, 'aTab');
  }
}
/* - - - - - - - - */

/* Create Tabs from idTabIDs and add addEventListener */
window.fnCreateTabs = ( Parent, TabsIDList, Class ) => {
  document.getElementById(Parent).innerHTML=''; // Clear it first
  TabsIDList.forEach( (X, Y) => {
    var tabAnchor = document.createElement("a");
    tabAnchor.setAttribute( 'href',"/" + TabsIDList[Y].toLowerCase() + "/" );
    var tab = document.createElement("p");
    // var tab = document.createElement("div");
    tabAnchor.id = X ; // Tab ID
    tabAnchor.className = Class; // Tab Classes
    let tsVar = eval('ts'+TabsIDList[Y]); // Add 'ts' for string
    tab.innerHTML = fnPickALangTxt(tsVar); // Write labels
    tabAnchor.appendChild(tab);
    document.getElementById(Parent).appendChild(tabAnchor);
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
  Array.isArray(arrOfTS) ? arrOfTS.forEach( lang => { (fnWhichLang()===lang.la) ? ( Txt = lang.txt ) : null }) : console.log( arrOfTS + " is not an array" );
  return( Txt );
}
/* - - - - - - - - */

/* Remove 'li' and write to IDs in HTML page */
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

window.fnScroll2ID = () => {
  let scrl2 = localStorage.getItem( 'Scroll2' );
  if (scrl2) { // scrollIntoView() has no control
    var element = document.getElementById(scrl2);
    var elementPosition = element.getBoundingClientRect().top;
    var headerOffset = document.getElementById( 'Navbar' ).offsetHeight+16;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    element.open = true;
    window.scrollTo({ top: offsetPosition });
  }
  localStorage.removeItem( 'Scroll2' );
}
/* - - - - - - - - */

window.fnNoClone = (arrArray) => {
  return arrArray.filter((itemX, Index) => arrArray.indexOf(itemX) === Index); // https://www.javatpoint.com/removing-duplicate-from-arrays-in-javascript
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
window.WhereAmI = () => {
  const segments = new URL(window.location.href).pathname.split('/');
  const last = segments.pop() || segments.pop(); //Handle trailing slash
  // console.log(last);
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

/* Push strings to IDs in HTML page */
window.fnShowValue = (Var, Val) => {
  // Array.isArray(Var) ? alert(Var + " is an array") : null; //Why?
  document.getElementById(Var).innerHTML = Val;
}
/* - - - - - - - - */

window.fnFillTable = (strWrap, arrRowIDs, arrCol1, arrCol2) => {
  var tbl = document.createElement("table");
  var tbdy = document.createElement('tbody');
  arrRowIDs.forEach( (rwid, x) => {
    var tr = document.createElement('tr');
    var anchor = document.createElement('a');
    anchor.setAttribute( 'id', rwid );
    // anchor.setAttribute( 'href',"/garlands/#" + rwid );
    anchor.setAttribute( 'href',"/garlands");
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    td1.innerHTML = arrCol1[x]; // 1st Daasas cell
    td2.innerHTML = arrCol2[x]; // 2nd Number cell
    anchor.appendChild(td1);
    anchor.appendChild(td2);
    tr.appendChild(anchor)
    tbdy.appendChild(anchor);

    anchor.addEventListener ( "click", function() {
      localStorage.setItem( 'Scroll2', this.id ); // Save id to localStorage
    });
  })
  tbl.appendChild(tbdy);
  strWrap.appendChild(tbl);
}
/* - - - - - - - - */