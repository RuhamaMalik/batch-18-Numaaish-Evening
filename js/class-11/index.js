// let users = ["ayesha", "bakhtawar", "amna", "hooria", "misbah"];
// let skills = ["html", "css", "bootstrap", "figma", "javaScript", "sleeping"];

// for (let i = 0; i < users.length; i++) {
//   document.writeln(`<h1>${users[i]}</h1>`);

//   for (let j = 0; j < skills.length; j++) {
//     document.writeln(`<li>${skills[j]}</li>`)
//   }

// }


// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i); // odd
//   }
// }

//////////////////// quiz


// let ques = [
//   "what is JS?",
//   "HTML stands for?",
//   "CSS stands for?",
//   "what is Bootstrap?",
//   "what is variable in JS?"
// ];



// let ans = [
//   "programming language",
//   "hyper text markup language",
//   "cascading style sheet",
//   "css library",
//   "data container"
// ];

// let score = 0;


// for (let i = 0; i < ques.length; i++) {
//   let userAns = prompt(ques[i]);

//   for (let j = 0; j < ans.length; j++) {
//     if (i === j && userAns === ans[j]) {
//       score++;
//     }
//   }

// }


// document.writeln(`<h1>Corect : ${score}</h1>`)
// document.writeln(`<h1>InCorect : ${ques.length - score}</h1>`)


///////////////////////// 22 - string


// let message = "hello ,how  are you?";           ;

// console.log(message.length); // 18
// console.log(message.length); // 20

// console.log(message[0]); // h

// console.log(message.slice(7,10)); // how
// console.log(message.slice(12,15)); // are
// console.log(message.slice(7));



///////////////////////


// let month = prompt("Enter a month")

// console.log(month.slice(0,3));


let str = "inka naam momina khan hai.";

console.log(str.slice(0,17) + "maryam" + str.slice(21) );

// console.log("inka naam momina ".length);


