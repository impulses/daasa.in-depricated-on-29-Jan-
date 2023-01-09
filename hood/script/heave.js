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
const app = initializeApp(firebaseConfig); /* Initialize Firebase */
import { getFirestore, getDocs, getDoc, doc, query, collection, collectionGroup, where, orderBy } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
const db = getFirestore();
/* -------- */
const glbRootCollection = "Haridasas"; // DB RootCollection
const SS_Data = 'Daasa_Data_Deposit'; // To store in localStorage
/* -------- */
window.arrDasaID     = [];
window.arrDasas      = [];
/* - - - - - - - - */

/* When the window loads */
window.onload = function() {
  fnCheck_for_Data();
  // fnUpdate_Dasaboard();
}

/* - - - - - - - - */

async function fnCheck_for_Data() {
// window.fnCheck_for_Data = () => {
  try {
    if (window.localStorage.getItem(SS_Data) !== null) {
//fnWriteAuthorsMenu(); // Read from localStorage
    } else {
      window.localStorage.clear(); // Just in case; clear
      localStorage.setItem( 'LangNow', LangNow );
      await fnGet_FSDB_Data(); // Read Firestore Database
      // fnWriteAuthorsMenu(); // localStorage - Populate Sidebar Dasas Menu
    }
  } catch (error) { console.log(error) }
}
/* - - - - - - - - */

/* -------- Fetch the DB content --------*/
export async function fnGet_FSDB_Data() {
// window.fnGet_FSDB_Data = ()=>{
  // console.log('Reading from Database...');
window.qryAuthors = query( collection(db, glbRootCollection), orderBy("Era", "asc") ); /* All docs, sort by author's era */
  const Snapshot_Auth = await getDocs(qryAuthors); // Fetch all authors
  // - - - -
  const arrFromDB = [];
  // - - - -
  Snapshot_Auth.forEach( doc => {
    let JSON_Data = [];
    JSON_Data = doc.data();
    // console.log( Object.values(JSON_Data) );
    arrFromDB.push(JSON_Data); // Push to arrFromDB
  });
  window.localStorage.setItem(SS_Data, JSON.stringify(arrFromDB)); // Store in sessionStorage
  // console.log('Wrote arrFromDB');
  // console.log(arrFromDB);
  fnUpdate_Dasaboard();
}
/* - - - - - - - - */

window.fnFilterArray = (arrArray) => {
  return arrArray.filter((itemX, Index) => arrArray.indexOf(itemX) === Index);
  /* https://www.javatpoint.com/removing-duplicate-from-arrays-in-javascript */
}
/* - - - - - - - - */

window.fnUpdate_Dasaboard = () => {
  let arrD = JSON.parse(window.localStorage.getItem(SS_Data));
  if(arrD){
    let strAuth_LA = 'Author_' + LangNow;
    // Note: Unique ID is 'Song_En'
    // 'Author_En' is the Auth ID
    // arrDasas return value is variable, based on LangNow
    // Use [] to set it not the dot as two vars joined
    arrDasas = arrD.map((X) => { return(X[strAuth_LA]); });
    arrDasaID  = arrD.map( (X) => { return( X.Author_En ); });
    fnValidateVarVal('dbDasaCount', fnFilterArray(arrDasas).length); // How many dasas?
    let IDs2Send = fnFilterArray(arrDasaID); // HTML element's ID
    let OverallSongsCount = 0;
    let pDiv = document.getElementById('WorksTable');
    pDiv.innerHTML='';// Clear table wrapper to fill...
    fnFilterArray(arrDasas).forEach( (D, i) => {
      // console.table( fnFilterArray(arrDasaID)[i]);
      let AnAuthorsWrksCount = GetAuthorsWorks( fnFilterArray(arrDasaID)[i], false ); // Receive each authors works count
      OverallSongsCount += AnAuthorsWrksCount;
      fnMakeTable(pDiv, IDs2Send[i], D, String(AnAuthorsWrksCount).padStart(2, '0') );
    })
    // console.log(OverallSongsCount);
    document.getElementById('dbWrksCount').innerHTML = OverallSongsCount;
  }
}
/* - - - - - - - - */

window.fnMakeTable = (Parent, RowID, arrCol_1, arrCol_2) => {
    var tbl = document.createElement("table");
    tbl.setAttribute("id", RowID); // To go to garlands page
    var tbdy = document.createElement('tbody');
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    td1.innerHTML = arrCol_1; // 1st Dasas cell
    td2.innerHTML = arrCol_2 ; // 2nd Number cell
    tr.appendChild(td1); tr.appendChild(td2);
    tbdy.appendChild(tr)
    tbl.appendChild(tbdy);
    Parent.appendChild(tbl);
}
/* - - - - - - - - */

window.GetAuthorsWorks = (strAuthID, ReturnSongs) => {
  const QA = JSON.parse(window.localStorage.getItem(SS_Data));
  // - - - - FILTER - - - -
  var FilteredAuth = QA.filter(({ Author_En }) => Author_En === strAuthID); // Filter songs of strAuthID
  // - - - -
  let WCount = 0;
  let SongsList2Send = [];
  Object.entries(FilteredAuth).forEach( Sng => {
    SongsList2Send.push( Sng[1]['Song_' + LangNow] ) // Throw songs in current language
    WCount++ // Count number of songs
  });
  if( ReturnSongs == true ) { // Return songs list if ReturnSongs is true; else return Count
    // console.table(FilteredAuth);
    console.table( SongsList2Send );
    return SongsList2Send;
  } else {
    console.table(strAuthID +' has '+WCount+' works');
    return WCount;
  }
}
/* - - - - - - - - */