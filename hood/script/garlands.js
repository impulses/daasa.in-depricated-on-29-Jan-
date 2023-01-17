/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* catalog.js | Catalog page | 03/01/2023          */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

// /* -------- */
let DasaIDs=[], DasaNms=[], SongIDs=[], SongNms=[];
// /* -------- */

/* When the window loads */
window.addEventListener("load", function() {
  fnAuth_N_Wrks_Tbl();
  fnScroll2ID();
  // console.log('I am here... garlands.js');
  fnRedrawDiv('NBTitle'); // Safari issue solved
});
/* - - - - - - - - */

// Writes the table in Garlands page
window.fnAuth_N_Wrks_Tbl = () => {
  DasaIDs = fnMake_D_W_ID_List()[0]; // heave.js
  DasaNms = fnMake_D_W_ID_List()[1]; // heave.js
  SongIDs = fnMake_D_W_ID_List()[2]; // heave.js
  SongNms = fnMake_D_W_ID_List()[3]; // heave.js

  let xpnd=document.createElement('button');
  xpnd.title = "Expand All";

  let Wrp = document.getElementById( 'tblsGarlands' );
  Wrp.innerHTML = ''; // Erase for rewriting...
  fnNoClone(DasaIDs).forEach( (x,y) => {
    let WrksLst = fnGet_Wrks_Lst_or_Cnt( x, true ); // Author's Works
    //----------- Outer
    var tblwrp = document.createElement("DETAILS"); // Was 'div'
    tblwrp.setAttribute( 'id', fnNoClone(DasaIDs)[y] );
    tblwrp.setAttribute( 'class', 'mB40')
    // tblwrp.open = true; // Keep it open
    var ttl = document.createElement("SUMMARY");
    ttl.innerHTML = fnNoClone(DasaNms)[y];
    // ttl.setAttribute( 'id', fnNoClone(DasaIDs)[y] );
    tblwrp.appendChild(ttl);
    //----------- Inner
    var tbl  = document.createElement("table");
    var tbdy = document.createElement('tbody');
    WrksLst.forEach( (rwid, x) => {
      var tr = document.createElement('tr');
      var anchor = document.createElement('a');
      anchor.setAttribute( 'href',"/glitters/#" + rwid );
      var td1 = document.createElement('td');
      var td2 = document.createElement('td');
      td1.innerHTML = WrksLst[x]; // 1st Daasas cell
      td2.innerHTML = "E ಕ த తె"; // 2nd Number cell
      anchor.appendChild(td1);
      anchor.appendChild(td2);
      tr.appendChild(anchor)
      tbdy.appendChild(anchor);
    });
    tbl.appendChild(tbdy);
    tblwrp.appendChild(tbl);
    Wrp.appendChild(tblwrp);
  })
}
/* - - - - - - - - */

window.fnRedrawDiv = (Ele) => { // For Safari Bug... Huh!
  // https://www.sitepoint.com/javascript-snippet-force-dom-element-redrawrepaint/
  var element = document.getElementById(Ele);
  var x = document.createTextNode('');
  x.id="xxx";
  var disp = element.style.display; // Previous display style
  element.appendChild(x);
  element.style.display = 'none'; // Hide it momentarily
  setTimeout( () => {
    element.style.display = disp;
    // element.removeAttribute("style");
    try { x.parentNode.removeChild(x); } catch (err) { }
    }, 32);
}
/* - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - */