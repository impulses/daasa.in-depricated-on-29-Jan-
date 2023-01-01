/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* index.js | Utility routines | 12/12/2022 | Sree */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

/* fnSetTheme – Toggle Dark & Light Themes. */
window.fnSetTheme = function fnSetTheme() {
  /* window.fnX = function fnX() is a workaround to use module in HTML */
  const root = document.documentElement;
  const checkBox = document.querySelector('#Toggler');
  const xKey = 'DasaTheme';
  const StoredTheme = localStorage.getItem(xKey);

  (StoredTheme) ? root.classList.toggle(StoredTheme) : root.classList.add('Light');
  (StoredTheme === 'Dark') ? checkBox.checked = true : null;

  if(checkBox) {
    checkBox.addEventListener('change', function () {
      root.classList.toggle('Light');
      root.classList.toggle('Dark');
      localStorage.setItem( xKey, root.classList );
    });
  }
}
/* - - - - - - - - */