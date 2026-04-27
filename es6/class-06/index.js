//////////////// Callback

// const greet = un => console.log(` Hello ${un}`);

// const userData = (greet) => { // greet -- callback

//   console.log(`i'm doing something`);
//   let user = { name: 'Ruhama', age: 10 }

//   greet(user.name);
// }
// userData(greet);


///////////////

// const square =n =>n * n;
// const double = n => n * 2;


// function calcNum(n, callback) {
//   let result = callback(n);
//   console.log(result);
// }

// calcNum(5, square); // 25
// calcNum(5, double); // 10


/////////////////////

const pakistan = (grade) => {
  switch (grade) {
    case 'A+':
      console.log(`MashAllah apne A+ grade hasil kia hai!`);
      break;
    case 'A':
      console.log(`Shabash Bht acha --- apne A grade hasil kia hai!`);
      break;
    case 'B':
      console.log(`chalo acha hogaya --- apne B grade hasil kia hai!`);
      break;
    case 'C':
      console.log(`Gham na karo --- apne C grade hasil kia hai!`);
      break;
    case 'D':
      console.log(`supply se tw bhtr hai --- apne D grade hasil kia hai!`);
      break;
    default:
      console.log('padh liya karo bhai ');

  }
}


// const us = (grade) => {
//   switch (grade) {
//     case 'A+':
//       console.log(`Well done --- apne A+ grade hasil kia hai!`);
//       break;
//     case 'A':
//       console.log(`Good job --- apne A grade hasil kia hai!`);
//       break;
//     case 'B':
//       console.log(`ok! --- apne B grade hasil kia hai!`);
//       break;
//     case 'C':
//       console.log(`work hard --- apne C grade hasil kia hai!`);
//       break;
//     case 'D':
//       console.log(`....... --- apne D grade hasil kia hai!`);
//       break;
//     default:
//       console.log('sham on you! ');
//   }
// }

// const getGrade = (perc,callback) => {
//   let grade;
//   switch (true) {
//     case perc >= 90:
//       grade = 'A+';
//       break;
//    case perc >= 80:
//       grade = 'A';
//       break;
//        case perc >= 70:
//       grade = 'B';
//       break;
//        case perc >= 60:
//       grade = 'C';
//       break;
//          case perc >= 50:
//       grade = 'D';
//       break;
//       default:
//         break;
//   }

// callback(grade);
// }


// getGrade(85,us);


//////////////// HOF (Hiegher order funvtionn)

// function hof(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     }
//   }
// }


// console.log(hof(5)(3)(4));




// const hof = (a)=> (b)=> (c)=> a+b+c;
// console.log(hof(7)(3)(1));


///////////////// IIFE (Immediately Invoked Function Expression)

// (function greet() {
//   console.log("hello");
// })()


/////////// 

// Symbol
// iterator
// generator
