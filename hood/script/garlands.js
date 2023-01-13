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
});
/* - - - - - - - - */

// Writes the table in Garlands page
window.fnAuth_N_Wrks_Tbl = () => {
  DasaIDs = fnList_Dasas_N_IDs()[0]; // heave.js
  DasaNms = fnList_Dasas_N_IDs()[1]; // heave.js
  SongIDs = fnList_Dasas_N_IDs()[2]; // heave.js
  SongNms = fnList_Dasas_N_IDs()[3]; // heave.js

  let Wrp = document.getElementById('tblsGarlands');
  Wrp.innerHTML = ''; // Erase for rewriting...

  fnNoClone(DasaIDs).forEach( (x,y) => {
    let WrksLst = fnGet_Wrks_Lst_or_Cnt( x, true ); // Author's Works
    // console.log( fnNoClone(DasaNms)[y]); // Author Names
    // console.table(WrksLst);
    var tblwrp = document.createElement("div");
    tblwrp.setAttribute( 'class', 'mB40')
    var ttl = document.createElement("div");
    ttl.innerHTML = fnNoClone(DasaNms)[y];
    ttl.setAttribute( 'id', fnNoClone(DasaIDs)[y] );
    tblwrp.appendChild(ttl);
    //-----------
    var tbl = document.createElement("table");
      var tbdy = document.createElement('tbody');
      WrksLst.forEach( (rwid, x) => {
        var tr = document.createElement('tr');
        var anchor = document.createElement('a');
        anchor.setAttribute( 'href',"/glitters/#" + rwid );
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        td1.innerHTML = WrksLst[x]; // 1st Daasas cell
        // td2.innerHTML = arrCol2[x]; // 2nd Number cell
        td2.innerHTML = "E ಕ த తె"; // 2nd Number cell
        anchor.appendChild(td1);
        anchor.appendChild(td2);
        tr.appendChild(anchor)
        tbdy.appendChild(anchor);
      })
      tbl.appendChild(tbdy);
      tblwrp.appendChild(tbl);
      Wrp.appendChild(tblwrp);
    //-----------
    // console.log(zz);
  })
}
/* - - - - - - - - */

/* - - - - - - - - - - - - - - - - - - - - - - - - */