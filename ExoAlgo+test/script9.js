const { log } = require("console");

function largestValues(arr){
  let tab = [];

  for (let i = 0; i<arr.length; i++) {
    tab.push(Math.max(...arr[i]))
  }

return tab

}


/* ÉNONCÉ 📚 */


/* 
Créez un Algorithme qui prend un tableau composé de plusieurs tableaux en argument et qui retourne un seul tableau qui contient la valeur maximale de chaque sous-tableau. 
*/


/* Test à passer 🧪 */

console.log(
  largestValues([
    [-1, -5, -8, 0],
    [15, 47, 88, 26],
    [32, 35, 37, 39],
    [3000, 1001, 857, 1],
  ])
); // [ 0, 88, 39, 3000 ]

