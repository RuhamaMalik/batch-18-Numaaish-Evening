// let str = `Sometimes it's useful to know how many characters are in a string. For example, suppose
// you want to slice the first three characters from any string than exceeds three characters in
// length, for example, slicing "Nov" from "November". To find the number of characters in a
// string, you use the same language you've already learned to find the number of elements in an
// array.`;

// if(str.length > 20){
// console.log(str.slice(0,21) + "...");
// }else{
//   console.log(str);
// }

// let str = "mera naam ruhama malik hai.hum js padh malik rahy hen. meri  bhn ka naam irmaa malik hai."

// let word = prompt("enter a word");
// let newWord = prompt("enter a new word");

// // console.log(str.slice(0,17) + "gull" + str.slice(22));

// for (let i = 0; i < str.length; i++) {
// //              2,  7
//   if (str.slice(i, i + word.length) === word) {
//    str =  str.slice(0, i) + newWord + str.slice(i+word.length);
//   }

// }


// console.log(str);


let str = "mera naam ruhama malik hai.hum js padh malik rahy hen. meri  bhn ka naam irmaa malik hai."

// console.log(str.indexOf("ruhama")); // 10
// console.log(str.indexOf("a")); // 3
// console.log(str.indexOf("abcd")); // -1


// let index = str.indexOf("ruhama");

// if(index !== -1){
// str =  str.slice(0, index) + "Ruhii" + str.slice(index+6);
// }

// console.log(str);


console.log(str.lastIndexOf("malik")); // 79
console.log(str.charAt(18));
