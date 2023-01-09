/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* heave.js | Reads database info |    12 Dec 2022 */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

/* -------- Global Declarations --------*/
/* My web app's Firebase configuration (required ones) */
const firebaseConfig = {
  apiKey: "AIzaSyAouFH1UMAriF3Pmn1HIzUPdJD2oN2qlWo",
  projectId: "daasa-in"
};
/* - - - - - - - - */

/* Import the needed functions from the SDKs */
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
const app = initializeApp(firebaseConfig); // Init Firebase
import { getFirestore, getDocs, getDoc, doc, query, collection, collectionGroup, where, orderBy } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
const db = getFirestore(); // Get a reference to the service
/* -------- */
const glbRootCollection = "Haridasas"; // DB RootCollection
const LocalDataRef = 'Daasa_Data_Deposit'; // localStorage ref
/* -------- */
window.arrDasaID = [];
window.arrDasas  = []; // Array contents variable, per LangNow
/* - - - - - - - - */

/* When the window loads */
window.onload = function() {
  fnCheck_for_Data();
  // fnUpdate_Dasaboard(); // is called in index.js
}
/* - - - - - - - - */

async function fnCheck_for_Data() { // Must be async function
  try {
    if (window.localStorage.getItem(LocalDataRef) !== null) {
      // Do nothing if localStorage data exists
    } else {
      window.localStorage.clear(); // Just in case; clear
      localStorage.setItem( 'LangNow', LangNow );
      await fnGet_FSDB_Data(); // Read Firestore Database
    }
  } catch (error) { console.log(error) }
}
/* - - - - - - - - */

/* -------- Fetch the Firestore database content -------- */
async function fnGet_FSDB_Data() { // Must be async function
window.qryAuthors = query( collection(db, glbRootCollection), orderBy("Era", "asc") ); /* All docs, sort by author's era */
  const Snapshot_Auth = await getDocs(qryAuthors); // Fetch all authors
  // - - - -
  const QueriedDBData = [];
  // - - - -
  Snapshot_Auth.forEach( doc => {
    QueriedDBData.push( doc.data() ); // Push to QueriedDBData
    // console.log( Object.values(doc.data()) );
  });
  window.localStorage.setItem( LocalDataRef, JSON.stringify(QueriedDBData) ); // Store in localStorage
}
/* - - - - - - - - */

// window.fnNoClone = (arrArray) => {
//   return arrArray.filter((itemX, Index) => arrArray.indexOf(itemX) === Index); // https://www.javatpoint.com/removing-duplicate-from-arrays-in-javascript
// }
// /* - - - - - - - - */

window.fnUpdate_Dasaboard = () => {
  let arrD = JSON.parse(window.localStorage.getItem(LocalDataRef));
  let strAuth_LA = 'Author_' + LangNow;
  // Note: UniqueID='Song_En' | AuthorID='Author_En'
  arrDasas = arrD.map((X) => { return(X[strAuth_LA]); }); // Use [] when you join two variables
  arrDasaID  = arrD.map( (X) => { return( X.Author_En ); });
  fnValidateVarVal('dbDasaCount', fnNoClone(arrDasas).length); // Show Dasas count
  let IDs2Send = fnNoClone(arrDasaID); // HTML element's ID
  let CountAuthWrk = 0, AllSongsCnt = 0;
  let arrWrksCnt = [];
  let pDiv = document.getElementById('WorksTable');
  pDiv.innerHTML='';// Clear table wrapper
  // Counting works of each arrDasas item 
  fnNoClone(arrDasas).forEach( (aD, i) => {
    CountAuthWrk = fnGetWrkLst( fnNoClone(arrDasaID)[i], false ); // Receive an author's works count
    arrWrksCnt.push( String(CountAuthWrk).padStart(2, '0') ) // Push ## to arrWrksCnt
    AllSongsCnt += CountAuthWrk; // Add to AllSongsCnt
  })
  // console.table(arrWrksCnt);
  document.getElementById('dbWrksCount').innerHTML = AllSongsCnt;
  fnFillTable( pDiv, fnNoClone(arrDasaID), fnNoClone(arrDasas), arrWrksCnt );
}
/* - - - - - - - - */

// Returns songs list if ReturnSongs is true; else return Count
window.fnGetWrkLst = (strAuthID, ReturnSongs) => {
  const QA = JSON.parse(window.localStorage.getItem(LocalDataRef));
  // - - - - FILTER - - - -
  var fltrdAuthor = QA.filter(({ Author_En }) => Author_En === strAuthID); // Filter songs of strAuthID
  // - - - -
  let WCount = 0;
  let SongsList2Send = [];
  Object.entries(fltrdAuthor).forEach( Sng => {
    SongsList2Send.push( Sng[1]['Song_' + LangNow] ) // Throw songs in current language
    WCount++ // Count number of songs
  });
  if( ReturnSongs == true ) {
    // console.table(fltrdAuthor);
    console.table( SongsList2Send );
    return SongsList2Send;
  } else {
    // console.log(strAuthID +' has '+WCount+' works');
    return WCount;
  }
}
/* - - - - - - - - */

window.fnFillTable = (strWrap, arrRowIDs, arrCol1, arrCol2) => {
  var tbl = document.createElement("table");
  var tbdy = document.createElement('tbody');
  arrRowIDs.forEach( (rwid, x) => {
    var tr = document.createElement('tr');
    tr.setAttribute("id", rwid); // To go to garlands page
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    td1.innerHTML = arrCol1[x]; // 1st Daasas cell
    td2.innerHTML = arrCol2[x]; // 2nd Number cell
    tr.appendChild(td1); tr.appendChild(td2);
    tbdy.appendChild(tr)
    tr.addEventListener ( "click", function() {
// Link function will come here
fnToast( this.innerText +' will go to garlands page', 1500 );
    });
  })
  tbl.appendChild(tbdy);
  strWrap.appendChild(tbl);
}
/* - - - - - - - - */