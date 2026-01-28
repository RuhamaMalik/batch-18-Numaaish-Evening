// var num = 13; // 12
// var exp = num++ - (--num + 7) + (num++ + --num) - num--;
// //         13   - ( 13   + 7) +  (13   +   13) - 13
// //           13 - 20+ 26 -13


// console.log(num); // 12
// console.log(exp); // 6



////////////////// Assignment operators =

// var x = 5;
// x = x + 2;
// x +=  2;
// x -= 2;
// x **= 2;
// console.log(x);


//////////// 7 - Eliminating ambiguity

// var y = 5 * ((2 + 3)- 2 / 2);
// //         5 * 4
// console.log(y);

// var x = (1 + 3) * 4;
// console.log(x); // 16

//////////////////// 8 - Concatenating text strings( + )

// console.log( 1 + 1 ); // 2
// console.log( "1" + 1 ); // 2
// console.log(3 + 7 + "11"); // 1011
// console.log(5 + "11" + 3 + 7); //  51137
// console.log(5 + "11" + (3 + 7)); //  51110
// console.log(5 + true + "3"); // 63 
// console.log(5 + "3" + true ); // 53true 
// console.log(3 + "3 7" + true +1); // 33 7true1

// console.log(5 + "1"); //51
// console.log(5 - "1"); //4

// console.log(5 - "1 abc"); // NaN
// console.log(5 - "1 5"); // NaN

// var fName = "Ayesha";
// var lName = "Naz";
// var fullName = fName + "     " + lName;

// console.log(fullName);

///////////////// 

// var name = "Kanzul";
// alert("Hello" + " " + name + "! kesi ho??");

// alert("2 plus 2 equals " + (2 + 2));


// document.writeln("  <h1>Mama Jeety ga bhai Jeety ga</h1>");
// document.writeln("Hello JavaScript");

// document.writeln(`
//   <ul>
//   <li>apple</li>
//   <li>mango</li>
//   <li>strawberry</li>
// </ul>
// `)


// document.writeln(` <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aut.</p>`)


// alert(`▬▬▬▬▬▬▬▬▬
//   ஜ۩۞۩ஜ
//   ▬▬▬▬▬▬▬▬▬`)


////////////////// 9 - Prompts

// prompt(question, defaultAns(optional))

// var ans = prompt("hello kese ho?");

// document.writeln("<h1>" + ans +"</h1>");

// document.writeln(`<h1>${ans}</h1>`);
// document.writeln(`<h1>${ 5 + 5}</h1>`);


