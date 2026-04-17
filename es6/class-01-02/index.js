// var a;
// var b;

// var global = 'global variable';


// function checkScope() {
//   console.log(global); // accessible
//   var local = 'local variable';

//   if (true) {
//     var block = 'block scope variable';
//     console.log(local);// accessible
//     console.log(block);
//     console.log(global);
//   }

//   console.log(block); // accessible


// }

// checkScope();
// console.log(local); // ref err 
// console.log(block); // ref err 




// function test(){
//   abcd = 'Abcd'; // global
// }
// test()
// console.log(abcd);



//////////////////////////////// let, const (Block SCOPE)

// const abcd;
// abcd ='mkdmd'

// var abcd;
// var abcd;

// let abcd;
// let abcd;

// const abcd;   // err

///////////////////////////// block scope

// let global = 'global variable';


// function checkScope() {
//   console.log(global); // accessible
//   let local = 'local variable';

//   if (true) {
//     let block = 'block scope variable';
//     console.log(local);// accessible
//     console.log(block);
//     console.log(global);
//   }

//   // console.log(block); // not accessible


// }

// checkScope();
// // console.log(local); // ref err 
// console.log(block); // ref err 



///////////////////////////   Hoisting


// function test(){
//   // /sdmmmkkmkmk
//   var a;
//   var b;
//   let abcd = 'Abcd'; 
// }



// console.log(a); // undefined
// var a= 2;
// console.log(a); // 2


// b=2;
// console.log(b);
// var b;



// b=2;
// console.log(b); // 2
// let b;
// console.log(b); // error


// console.log(a); // errr
// let a = 'hello'


// test(); 
// function test() {
//   console.log('maza aahi jaega');
// }


// greet(); // err
// var greet = function(){ // function expression
//   console.log('Hello Bacho kese ho???');
// }


