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
  // console.log('Reading from Database...');
  const qryAuthors = query( collection(db, glbRootCollection), orderBy("Era", "asc") ); /* All docs, sort by author's era */
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
}
/* - - - - - - - - */

window.fnFilterArray = (arrArray) => {
  return arrArray.filter((itemX, Index) => arrArray.indexOf(itemX) === Index);
  /* https://www.javatpoint.com/removing-duplicate-from-arrays-in-javascript */
}
/* - - - - - - - - */
window.fnUpdate_Dasaboard = () => {
  // map() creates a new array by performing a function on each element
  let arrD = JSON.parse(window.localStorage.getItem(SS_Data));
  if(arrD){
    // Note: Unique ID is 'Song_En'
    let strD_ID = 'Author_En'
    let strAuth = 'Author_' + LangNow;
    // arrDasaID will be the HTML element ID
    arrDasaID  = arrD.map( (X) => { return( X.strAuth_En ); });
    // arrDasas return value is variable, based on LangNow
    arrDasas   = arrD.map( (X) => { return(X[strAuth]); });
  }
  fnValidateVarVal('dbDasaCount', fnFilterArray(arrDasas).length );
  console.table( fnFilterArray(arrDasas));
  
  fnFilterArray(arrDasas).forEach( D => {
    // console.table(D);

//TBD: Construct a table under 'dbWorkList'
// <table>
// <tbody>
// <tr><td>ಶ್ರೀಪಾದರಾಜರು</td>            <td>90</td></tr>

  })

}
/* - - - - - - - - */