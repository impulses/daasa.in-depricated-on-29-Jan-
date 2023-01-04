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

window.fnDoTabLabels = () => {
  fnPush2IDs([ 'tsTabH', 'tsTabC', 'tsTabG' ]);
  // ( URLHas('catalog') ) ? console.log('Yes') : console.log('No');
  // switch (URLHas('catalog')) {
  //   case URLHas('catalog'): console.log('Catalog');
  //   //fnActive('TabC', 'tabOn');
  //   break;
  //   case URLHas('gems'): console.log('Gems');
  //   break;
  // }

  // switch (new Date().getDay()) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //      day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  // }

  // ( URLHas('catalog') ) ? console.log('Yes') : console.log('No');
}
/* - - - - - - - - */

// function fnFeedHome() {
//   fnPush2IDs( [ 'tsdbTableHdr', 'tsdbSbTtl', 'tsdbWrkSbTtl', 'tsSbttlVid', 'tsSbttlVstr', 'tsSbttlSbscrbrs', 'tsSbttlCntrbtr','tsPrelHdg', 'tsPrelude', 'tsRegTtl', 'tsRegSbttl' ] );
// }
/* - - - - - - - - - - - - - - - - - - - - - - - - */