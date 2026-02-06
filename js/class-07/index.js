// let fruits = ['mango', "apple", "banana", "orange", "grapes"];
// // fruits.length = 0;
// fruits = [];
// fruits[5] = "peach";
// console.log(fruits); // ["peach"] --- length :6

// console.log(fruits.length);


//////////////// ARRAY METHODS

// pop --- remove last
// push -- add last
// shift -- remove start
// unshift -- add start
// slice
// splice

// let colours = ["pink","purple","sky blue","black", "brown"];
// colours.pop();
// colours.pop();
// colours.pop();

// let removeEle = colours.pop();
// console.log(colours);
// console.log(removeEle); // brown

// colours.push("yellow","grey", "green","orange");
// console.log(colours);

// colours.shift();
// colours.shift();
// colours.shift();
// let removeEle = colours.shift();
// console.log(colours); //['brown']
// console.log(removeEle); // black


// colours.unshift("yellow","grey", "green","orange")
// console.log(colours);


// primitive - direct value - single value - immutable (no changeble)

// let x = 5; // direct value
// let y = x;

// x = 10;

// console.log("X ------ ",x); // change
// console.log("Y ------ ",y); // not change



// non-primitive - reference - multiple value - mutable(changeble)

// let students = ["hamna", "maheen","umaima","maryam","momina"];
// let users = students; // share reference

// students[4] = "ayesha";

// console.log("students ------ ", students); // change
// console.log("users ------ ", users); // change


//////////////// slice - copy shallow/deep

// let students = ["hamna", "maheen","umaima","maryam","momina"];
// let users = students.slice();

// students[4] = "ayesha";

// console.log("students ------ ", students); // change
// console.log("users ------ ", users); // not change



/////////////////// Nested Array


// let arr = [
//   ["a", "b", "c"],
//   ["x", "y", "z" , ["e", "f"], "g"],
//   [1,2,3]
// ];

// // console.log(arr[1]); //["x", "y", "z"]
// // console.log(arr[1][1]); // y
// // console.log(arr[1][3]); // ['e', 'f']
// console.log(arr[1][3][0]); // e


///////////////// shallow/deep

// slice - shallow copy --- copy only first level


var foods = ["burger","biryani","nihari",["water", "coffee","soft drink"]];
var foods2 = foods.slice();

// foods[1] = "pulao";
foods[3][1] = "chae";

console.log(foods); // change
console.log(foods2); //  change
