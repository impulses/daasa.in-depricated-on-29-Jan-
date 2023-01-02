/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* index.js | Utility routines | 22/12/2022 | Sree */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

/* When the window loads */
window.addEventListener("load", function() {
  // fnDimensions('WxH');

});
/* - - - - - - - - */

/* fnActive | Looks for elements with the same className siblings, marks 'this' element as active. */
window.fnActive = (Element) => {
  let Class = Element.className.split(" ")[0]; // Get the first className
  Class ? document.querySelectorAll(`.${Class}`).forEach((Item) => { Item.classList.toggle('Slctd', Element === Item) }) : null;
}
/* - - - - - - - - */

/* Toast Messages */
window.fnShowToast = function fnShowToast(Msg) {
  const tDiv = document.createElement("div");
  tDiv.id = "idToast"; // For styling
  tDiv.className = "show"; // Add "show" class
  tDiv.innerText = Msg;
  document.body.appendChild(tDiv); // Append to body
  setTimeout( function(){ tDiv.remove(); }, 2000 ); // Remove div after 2 sec
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