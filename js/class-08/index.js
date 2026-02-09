// var colours = ["pink","yellow","purple",["black","grey"],"green"];
// var favColour = colours.slice();

// colours[2]= "indigo";
// colours[3][1] = "dark grey";

// console.log(colours); 
// console.log(favColour);


///////////// slice

// slice(startIndex, endIndex(exclude))

//  var colours = ["pink","yellow","purple","black","grey"];

//  var copy = colours.slice(1,3); // ["yellow","purple"]
//  var copy = colours.slice(3); // ['black', 'grey']
//  var copy = colours.slice(2,3); // ["purple"]
//  var copy = colours.slice(-2); //  ['black', 'grey']
//  var copy = colours.slice(-4, -2); //  ["yellow","purple"]
//  var copy = colours.slice(-4, 3); //  ["yellow","purple"]


//  console.log(copy);



///////////////// splice --- change original array

// splice(startIndex(include) , deleteCount , ItemsToBeAdd)
 

// var colours = ["pink","yellow","purple","black","grey"];

// colours.splice(2); // ["pink","yellow"]
// colours.splice(3); // ["pink","yellow","purple"]
// colours.splice(0); // []

// colours = [];
// colours.length =0;
// colours.splice(0); 

// colours.splice(2,0,"green",["red","crimson"],"orange");

// colours.splice(-3);

// colours.splice(1, 1, "green")
// colours.splice(1, 1)

// console.log(colours);

//////////////  LOOPS - for - while - do while

// for(initialization; condition; updation){
//   // code
// }

//  console.log("Hello");
//  console.log("Hello");
//  console.log("Hello");
//  console.log("Hello");
//  console.log("Hello");

// let i=1;
// for(i; i<=5; i++){
//   console.log("Hello " + i);
// }

// for(var i =10; i>=1; i--){
//   console.log("puk puk pakau" , i);
// }

