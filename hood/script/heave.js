/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* heave.js | Reads database info |    12 Dec 2022 */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

/* -------- Firebase Config --------*/
const firebaseConfig = {
  /* My web app's Firebase configuration (required ones) */
  apiKey: "AIzaSyAouFH1UMAriF3Pmn1HIzUPdJD2oN2qlWo",
  projectId: "daasa-in"
};

/* Import the needed functions from the SDKs */
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
const app = initializeApp(firebaseConfig); // Init Firebase
import { getFirestore, getDocs, getDoc, doc, query, collection, collectionGroup, where, orderBy } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
const db = getFirestore(); // Get a reference to the service
const glbRootCollection = "Haridasas"; // DB RootCollection
/* - - - - - - - - */

/* -------- */
window.LocalDataRef = 'Daasa_Data_Deposit'; // localStorage ref.
// Note: UniqueID='Song_En' | AuthorID='Author_En'
let arrDasaID=[], arrDasas=[], arrSongID=[], arrSongs=[];
/* -------- */

window.fnMake_D_W_ID_List = () => { // Returns arrDasaID & arrDasas
  let LngNw = localStorage.getItem('LangNow');
  let DDD = JSON.parse( window.localStorage.getItem(LocalDataRef) ); // DDD = Disk Data Dump

  if(!DDD) { console.log('No data yet') };

  arrDasaID = DDD.map((X) => { return(X.Author_En); });
  arrDasas  = DDD.map((X) => { return(X['Author_'+LngNw]); }); // Use [] when you join two variables
  arrSongID = DDD.map((X) => { return(X.Song_En); });
  arrSongs  = DDD.map((X) => { return(X['Song_'+LngNw]); });
  // console.table(arrSongID);
  // console.table(arrSongs);
  return [ arrDasaID, arrDasas, arrSongID, arrSongs ]; // Return an array
}
/* - - - - - - - - */

/* When the window loads */
window.onload = function() {
  //CHECK IF THIS NEEDS TO RUN EVERYTIME EVEN ON OTHER PAGES 
  console.log('Inside Heave [TBD]');
  fnCheck_for_Data();
}
/* - - - - - - - - */

async function fnCheck_for_Data() { // Must be async function
  try {
    if (window.localStorage.getItem(LocalDataRef) !== null) {
      (WhereAmI()=='') ? fnUpdate_Dasaboard() : null;
    } else {
      window.localStorage.removeItem( LocalDataRef ); // Just in case; clear
      await fnGet_FSDB_Data(); // Read Firestore Database
      (WhereAmI()=='') ? fnUpdate_Dasaboard() : null; //If @ home
    }
  } catch (error) { console.log(error) }
}
/* - - - - - - - - */

/* -------- Fetch the Firestore database content -------- */
async function fnGet_FSDB_Data() { // Must be async function
  // - - - -
  window.qryAuthors = query( collection(db, glbRootCollection), orderBy("Era", "asc") ); /* All docs, sort by author's era */
  const Snapshot_Auth = await getDocs(qryAuthors); // Fetch all authors
  // - - - -
  const QueriedDBData = [];
  Snapshot_Auth.forEach( doc => {
    QueriedDBData.push( doc.data() ); // Push to QueriedDBData
    // console.log( Object.values(doc.data()) );
  });
  window.localStorage.setItem( LocalDataRef, JSON.stringify(QueriedDBData) ); // Store in localStorage
}
/* - - - - - - - - */

async function fnCheckifLyricsExist () {
  //CHECK HOW FAR I CAN USE THE LOCAL DATA...
  // const QS = query(collection(db, glbRootCollection), where("Song_E", "==", strSongTitle));
    // const QSinDB = await getDocs(QS);
    const KTitle = QSinDB.docs.map(doc => doc.data().Song_K);
    const KAuthor = QSinDB.docs.map(doc => doc.data().Author_K);
    const xYTLink = QSinDB.docs.map(doc => doc.data().YTLink);
// check for subcollection
  const QQ = query(collection(db, glbRootCollection+"/"+strSubCollection+"/Lyrics")); /* All documents, sort by era, for authors */
    const querySnapshot = await getDocs(QQ);

this.db.collection('users').doc('uid').get().limit(1).then(
  doc => {
    if (doc.exists) {
      this.db.collection('users').doc('uid').collection('friendsSubcollection').get().
        then(sub => {
          if (sub.docs.length > 0) {
            console.log('subcollection exists');
          }
        });
    }
  });
}
/* - - - - - - - - */

window.fnUpdate_Dasaboard = () => {
  fnMake_D_W_ID_List();
  fnShowValue('dbDasaCount', fnNoClone(arrDasas).length); // Show Dasas count
  let CountAuthWrk = 0, AllSongsCnt = 0, arrWrksCnt = [];
  let pDiv = document.getElementById('WorksTable');
  pDiv.innerHTML=''; // Clear table wrapper
  // Now count works of each arrDasas item 
  fnNoClone(arrDasas).forEach( (aD, i) => {
    CountAuthWrk = fnGet_Wrks_Lst_or_Cnt( fnNoClone(arrDasaID)[i], false ); // Receive an author's works count
    arrWrksCnt.push( String(CountAuthWrk).padStart(2, '0') ) // Push ## to arrWrksCnt
    AllSongsCnt += CountAuthWrk; // Add to AllSongsCnt
// console.table( fnGet_Wrks_Lst_or_Cnt( fnNoClone(arrDasaID)[i], true ) );
  })
  document.getElementById('dbWrksCount').innerHTML = AllSongsCnt;
  fnFillTable( pDiv, fnNoClone(arrDasaID), fnNoClone(arrDasas), arrWrksCnt );
}
/* - - - - - - - - */

// Returns songs list if ReturnSongs is true; else return Count
window.fnGet_Wrks_Lst_or_Cnt = (strAuthID, ReturnSongs) => {
  let LngNw = localStorage.getItem('LangNow');
  const QA = JSON.parse(window.localStorage.getItem(LocalDataRef));

  // - - - - FILTER JSON - - - -
  var fltrdAuthor = QA.filter(({Author_En}) => Author_En === strAuthID); // Filter songs of strAuthID
  // - - - -
  let WrksCnt = 0, SongsList2Send = [];
  Object.entries(fltrdAuthor).forEach( Sng => {
    SongsList2Send.push( Sng[1]['Song_' + LngNw] ) // Push songs in current language
    WrksCnt++ // Keep a count of those songs
  });
  if( ReturnSongs == true ) {
    // console.table(fltrdAuthor);
    // console.table( SongsList2Send );
    return SongsList2Send;
  } else {
    // console.log(strAuthID +' has '+WrksCnt+' works');
    return WrksCnt;
  }
}
/* - - - - - - - - */