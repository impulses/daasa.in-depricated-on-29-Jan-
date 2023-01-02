/* - - - - - - - - */
// JAVASCRIPT TIPS...

// btn.id = X.padStart(7, 'lang-'); /* Pads; e.g. 8 with '08' */

// https://dev.to/kpiteng/javascript-tips-tricks-and-best-practices-33dm

// var foo = 10;  
// foo == 10 && doSomething(); // is the same thing as if (foo == 10) doSomething(); 
// foo == 5 || doSomething(); // is the same thing as if (foo != 5) doSomething();
// arg1 = arg1 || 10; // arg1 will have 10 as a default value if it’s not already set
/* - - - - - - - - */

// arg2 = arg2 || 'text not specified';
//if the arg2 is false, then the text gets the default value

/* <script>
        function modifyState() {
            let stateObj = { id: "100" };
            window.history.replaceState(stateObj,
                "Page 3", "/answer#page3.html");
        }
         
        function remove_hash_from_url() {
            var uri = window.location.toString();
 
            if (uri.indexOf("#") > 0) {
                var clean_uri = uri.substring(0,
                                uri.indexOf("#"));
 
                window.history.replaceState({},
                        document.title, clean_uri);
            }
        }
    </script> */

/* let url = document.getElementById("w3s");
document.getElementById("demo").innerHTML = "The anchor portion of the URL is: " + url.hash; 
also see: location.hash;
<input type="button" value="Reload Page" onClick="window.location.reload(false)">

location.assign("https://www.w3schools.com");

*/

// if(history.pushState) {
//   history.pushState(null, null, '#myhash');
// }
// else {
//   location.hash = '#myhash';
// }

function fnTest1 () {
  const Turtle ={
    Name: 'Bob',
    meal: 10,
    diet: 'berries'
  }

  // function feed( { Name, meal, diet } ) {
  //   return `Feed  ${Name} ${meal} kilos of ${diet}`
  // } //One method
  // function feed( animal ) {
  //   const {Name, meal, diet} = animal;
  //   return `Feed  ${Name} ${meal} kilos of ${diet}`
  // } // Another method

  let feed = ( animal ) => {
    const { Name, meal, diet } = animal; // Destructuring
    return `Feed  ${Name} ${meal} kilos of ${diet}`
  }

  console.log( feed(Turtle) )

  // var name = prompt("Who goes there?", "Your name...");
  // console.log( name );
  // Spread-Syntax the "..." adds to array:
  let pokemon = []
  pokemon = [...pokemon, 'AddtoPokemon1', 'AddtoPokemon2', 'AddtoPokemon3']
  console.log(pokemon);
  // console.log(arguments);
}

// Distance you've scrolled from the top of a page
// scrollHeight = window.document.documentElement.scrollTop
// Current height of viewport
// viewportHeight = window.innerHeight
// Distance from top to bottom of a page
// pageHeight = window.document.documentElement.scrollHeight

// event.stopPropagation();

/* const myForm = document.forms.frmReg.elements;
console.log(myForm.em.placeholder);
myForm.em.placeholder= "you@email.com"; */


function hasKannadaChar(str) {
  return /[\u0C80-\u0CFF]/.test(str);
}
// Tamil Range: 0B80–0BFF
// Telugu Range: 0C00–0C7F
// Kannada Range: 0C80–0CFF
/* - - - - - - - - */
// https://wesbos.com/tagged-template-literals
/* - - - - - - - - */