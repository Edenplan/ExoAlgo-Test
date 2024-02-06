// function getVowelsNumber(txt) { 
//     const voy = ["a","e","i","o","u","y"]
//     let compt = 0

//     for (let i=0; i<txt.length; i++) {

        

//         for (let j=0 ; j< voy.length; j++) {
//             if (txt[i]=== voy[j]) 
//         compt++

//         }
//     } 
//     return compt
// }


/* ÉNONCÉ 📚 */


/* Créez un programme qui retourne le nombre de voyelles dans une chaîne de caractères. */


/* Tests à passer 🧪 */

console.log(getVowelsNumber("jdhqgdqsghdakzejamazemlqksd"));               // 5
console.log(getVowelsNumber("Lorem ipsum dolor sit amet consectetur."));   // 13
console.log(getVowelsNumber("L’imagination gouverne le monde."));          // 13
console.log(getVowelsNumber("zzzZZZzz"));                                  // 0


function getVowelsNumber(str){
    let vowel = ["a", "e", "i", "o", "u"]
    let count = 0
    for(let i = 0; i < str.length; i++){
        if(str.includes(vowel[i])){
            count++
        }
    }
    return count
}
module.exports = getVowelsNumber;

