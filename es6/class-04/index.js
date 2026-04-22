//////////// Rest / Spread operator (...)

// function sum(...allParam){ // rest
// console.log(allParam); // []
// console.log(...allParam); // spread

// }

// sum(1,2,3,4,5,6,7,8,9,0)


////////////////

// let arr = [1,[2],3,4,5];
// let arr2 = [...arr, 6,7,8,9]; // shallow copy

// arr[1][0] = 'two'; // change 2no jaga
// console.log(arr);
// console.log(arr2);


/////////////////////

// let obj = {
//   username: "Ruhama",
//   age: 10,
//   skills: {
//     javaScript: 'beginner',
//     Html: 'may be',
//     ReactJs: 'coming soon...'
//   }
// }

// let obj2 = {
//   ...obj,
//    email:'ruhama@gmail.com',
//     username:'Gull',
//     skills:{
//       ...obj.skills
//     } 
//   }

// obj.age = 11;
// obj.skills.Html = 'proficient';

// console.log(obj);
// console.log(obj2);

//////////////////////////// arrow Function

// let sum = function (a, b) {
//   return a + b;
// }

// console.log(sum(2,3));


// let sum = (a, b) => a + b;

// console.log(sum(5,6));


// let greet = name => `Hello ${name}!`
// console.log(greet("Ruhama"));

let myFunc = () => {
  console.log(arguments.length);
}


myFunc(1, 2, 3, 4, 5);
