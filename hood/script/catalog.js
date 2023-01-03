/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* catalog.js | Catalog page | 03/01/2023          */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

/* When the window loads */
window.addEventListener("load", function() {
  fnAddTabs();
  fnDoTabLabels();
});
/* - - - - - - - - */

/* Create Tabs from idTabIDs and add addEventListener */
window.fnAddTabs = () => {
  let target = document.getElementById('TabsWrap');
  idTabIDs.forEach( X => {
    var tab = document.createElement("div");
    tab.id = X ; // ID for button
    tab.className = 'aTab'; // Btn Classes
    /* Listen to LangBtns event */
    tab.addEventListener ( "click", function() {
      fnActive(this, 'tabOn');
      fnDoTabLabels();
    });
    target.appendChild(tab);
  });
}
/* - - - - - - - - */

window.fnDoTabLabels = () => { fnPush2IDs([ 'tsTabH', 'tsTabC', 'tsTabG' ]); }
/* - - - - - - - - */

// function fnFeedHome() {
//   fnPush2IDs( [ 'tsdbTableHdr', 'tsdbSbTtl', 'tsdbWrkSbTtl', 'tsSbttlVid', 'tsSbttlVstr', 'tsSbttlSbscrbrs', 'tsSbttlCntrbtr','tsPrelHdg', 'tsPrelude', 'tsRegTtl', 'tsRegSbttl' ] );
// }
/* - - - - - - - - - - - - - - - - - - - - - - - - */