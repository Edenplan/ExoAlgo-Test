function removeDuplicates(arr) {
    let tab = []; // Ajoutez le premier élément directement

    for (let i = 0; i < arr.length; i++) { // Commencez depuis le deuxième élément
        if ((tab.indexOf(arr[i])) === -1) {
            tab.push(arr[i]);
        }
    }

    return tab;
}

// function removeDuplicates(arr) {
//     let tab = []

//     for (let i = 0; i <arr.length; i++) {
//         if  (tab[i]!==arr[i])
//     {

//         tab.push(arr[i])
//     }
//     }
//   return tab  
// }



/* ÉNONCÉ 📚 */

/* Créez un algorithme qui retourne un tableau sans les valeurs doublon de celui qui est passé en argument. */

/* Tests à passer 🧪 */


console.log(removeDuplicates([5,5,4,6,3,5]));               // [5, 4, 6, 3]
console.log(removeDuplicates(["a","b","z","z","e","a"]));   // ["a", "b", "z", "e"]

