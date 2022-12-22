/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* index.js | Utility routines | 22/12/2022 | Sree */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

/* When the window loads */
window.addEventListener("load", function() {

  fnDimensions('WxH');
});
/* - - - - - - - - */

/* fnDimensions('ID') – Show window size */
const fnDimensions = (Ele) => {

  let WH = ( window.innerWidth+'x' + window.innerHeight )

  document.getElementById('WxH').innerHTML =  WH;
  window.addEventListener( 'resize', function() {
    fnDimensions(Ele);
  } );
}
/* - - - - - - - - */