/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* index.js | Utility routines | 22/12/2022 | Sree */
/* - - - - - - - - - - - - - - - - - - - - - - - - */
// const formElem = document.querySelector('form');
/* When the window loads */
window.addEventListener("load", function() {
  // fnDimensions('WxH');
  // formElem.addEventListener('submit', (e) => {
  //   e.preventDefault();// on form submission, prevent default
  //   new FormData(formElem);// construct a FormData object, which fires the formdata event
  // });
});
/* - - - - - - - - */

/* fnActive | Looks for elements with the same className siblings, marks 'this' element as active. */
window.fnActive = (Element) => {
  let Class = Element.className.split(" ")[0]; // Get the first className
  Class ? document.querySelectorAll(`.${Class}`).forEach((Item) => { Item.classList.toggle('Slctd', Element === Item) }) : null;
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