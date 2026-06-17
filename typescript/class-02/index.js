"use strict";
////////////// type inference (implicit type)
// let myFunc:NullFunc = (a)=>{
//   console.log(a , ' hello')
// };
// myFunc(55) 
// myFunc("6") // error
let myFunc2 = (a) => {
    return a;
};
console.log(myFunc2(10));
