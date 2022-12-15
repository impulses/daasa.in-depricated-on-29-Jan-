/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* index.js | Utility routines | 12/12/2022 | Sree */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

/* When the window loads */
window.onload = function() {
    fnDims('xDims'); /* Show window dimensions */
    fnSetTheme();
}
/* - - - - - - - - */

window.fnDims = function fnDims() {
    document.getElementById('xDims').innerHTML = ( window.innerWidth+'x' + window.innerHeight );
    window.addEventListener("resize", fnDims);
}
/* - - - - - - - - */

/* fnActive | Looks for elements with the same className siblings, marks 'this' element as active. */
window.fnActive = function fnActive(Element) {   // Workaround to use Module in HTML
    let Class = Element.className.split(" ")[0]; // Get the first className
    Class ? document.querySelectorAll(`.${Class}`).forEach((Item) => { Item.classList.toggle('active', Element === Item) }) : null
}
/* - - - - - - - - */

window.fnSetTheme = function fnSetTheme() { // Toggle Themes //

  const root = document.documentElement;
  const checkBox = document.querySelector('#Toggler');
  const xKey = 'DasaTheme';
  const StoredTheme = localStorage.getItem(xKey);

  (StoredTheme) ? root.classList.toggle(StoredTheme) : root.classList.add('Light');
  (StoredTheme === 'Dark') ? checkBox.checked = true : null;

  checkBox.addEventListener('change', function () {
    root.classList.toggle('Light');
    root.classList.toggle('Dark');
    localStorage.setItem( xKey, root.classList );
  });
}
/* - - - - - - - - */


/* - - - - - - - - */
// JAVASCRIPT TIPS...

// https://dev.to/kpiteng/javascript-tips-tricks-and-best-practices-33dm

// var foo = 10;  
// foo == 10 && doSomething(); // is the same thing as if (foo == 10) doSomething(); 
// foo == 5 || doSomething(); // is the same thing as if (foo != 5) doSomething();

// arg1 = arg1 || 10; // arg1 will have 10 as a default value if it’s not already set
/* - - - - - - - - */