// var age = +prompt("Apni Age bataen?");
// console.log(age + 1); // 51
// console.log(age + 1); // 6
// console.log(age + 1); //  NaN

// var city = prompt("Capital of Pakistan?", "Karachi");
// console.log(city);


/////////////// Comparision Operators  (return boolean --- compare two values)
/*

== --------- compare values only
!=
=== -------- compare value + data type
!==
>
<
>=
<=

*/

// console.log(5 == 5); // true
// console.log(6 == 5); // false
// console.log("5" == 5); // true
// console.log("apple" == "apple"); // true
// console.log("apple" == "Apple"); // false --- case-sensitive

// console.log(5 != 5); // false
// console.log(6 != 5); // true
// console.log("5" != 5); // false

// console.log(5 === 5); // true
// console.log("5" === 5); // false

// console.log(5 > 5); // false
// console.log(5 > 4); // true
// console.log("5" > 4); // true


// console.log(7 < 6);// false
// console.log(7 < 8);// true

// console.log(5 >= 5); // true
// console.log(5 >= 3); // true
// console.log(5 >= 6); // false


// console.log(5 <= 5); // true
// console.log(1 <= 5); // true

////////////////////// 10 - if (agar)

//  if(condition){
//    code
//  }

// if(true){
// console.log("Samosyyyy");
// }

//////////////// truthy or falsy values

///// 1 " "

// if(1){
//   console.log("Samosyyyy");
// }

// if(" "){
//   console.log("Samosyyyy");
// }

// if("ayesha"){
//   console.log("Samosyyyy");
// }

// var username = "ayesha";

// if(username){
//   console.log("user hai");
//   }


// if (-1) {
//   console.log("Samosyyyy");
// }

// if("undefined"){
//   console.log("batao");
// }

////////// 0  "" null undefined

// if(0){
//     console.log("Samosyyyy");
// }

// if ("") {
//   console.log("Samosyyyy");
// }

// if (null) {
//   console.log("Samosyyyy");
// }



// if(undefined){
//   console.log("nahi chalega");
// }

var userAns = prompt("Capital of pakistan").toLowerCase();
var correctAns = "islamabad";

if (userAns === correctAns) {
  alert("Congratulations!")
}

// console.log("ApplE".toUpperCase());
// console.log("ApplE".toLowerCase());

