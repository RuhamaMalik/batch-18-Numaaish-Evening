// let x= 3; // global


// function sum(a, b) {
//   let x = 4; // variable shadowing
//   console.log(a + b + x); // 15
//   // console.log(a + b + x); // 14
// }

// sum(5, 6); // 1
// console.log(x); // 3

// console.log(a);// ReferenceError

//////////////////////

// let y = 3;

// function sum(a, b,c) {
//   y = 5; // reassign
//   console.log(a + b + y); 
//   console.log(c); // undefined

// }

// sum(3, 7); // 15
// console.log(y); // 5

////////////////////


// function sum(a, b,c) {
//   console.log(b , c); // 7

// }

// sum(3, undefined ,7); // 15

//////////// Default Parameters

// function greet (username="Guest", message){
//   // console.log(`Hello ${username}`);
//   console.log(message + " " + username);
// }

// greet("Ruhama", "Hello");
// greet("Ayesha", "Good bye");
// greet(undefined, "Welcome Back!");
// greet("Laiba", "Good Job!");


/////////////////////

// function makeWithDrawl(currentBalance, amount) {
//   if (amount <= currentBalance) {
//    balance -= amount;
//    console.log("WithDrawl Successful" , balance);

//   } else {
//     console.log("Insufficient Balance");
//   }
// }

// var balance = 10000;
// makeWithDrawl(balance, 1000);
// makeWithDrawl(balance, 500);
// makeWithDrawl(balance, 1000);


/////////////////////


// function sum(a, b) {
//  return a + b;
//  console.log("hello");
// }

// let result = sum(2,3);
// console.log(result);
// console.log(sum(3,8));


// function multiply(num) {
//   return (
//     num * 5
//   );

// }

// let result = multiply(5) + 3
// console.log(result);


//////////////// 39 - switch statements


/*
var day = "sat";

switch (day) {
  case "sat":
  case "sun":
    console.log("Weekend");
    break;
  case "mon":
  case "tue":
  case "wed":
    console.log("Week Day!");
    break;
  default:
    console.log("Incorrect Input");
    
}
*/

/* 
multi
line
comment
*/

