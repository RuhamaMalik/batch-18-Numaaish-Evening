// let myFunc = (...arg) => {
//   console.log(arg.length);
// }


// myFunc(1, 2, 3, 4, 5);

/////////////// 

// let obj ={
//   name:'Ruhama',
//   age:10,
//   isActive:true,
//   // greet:function(){
//   //   return `Hello ${this.name}`
//   // }
//   greet:()=>{
//     return `Hello ${this.name}`
//   }
// }


// console.log(obj.greet());


/////////////// 

// const MyConstructor=(name,age)=>{
// this.name=name;
// this.age=age;
// }

// let test = new MyConstructor('Saba',10);
// console.log(test);

///////////////  Mutation (mutable-changable) (immutable-not changable)

// let obj ={
//   name:'Ruhama',
//   age:10,
//   isActive:true,
// }

// Object.freeze(obj);

// obj.age=11;
// console.log(obj);

/////////////// Closures

// let myVar = 'test';
// function outer() {
//   let abcd = 'xyz';
//   function child() {
//     let child1 = 'child one';
//     console.log(abcd);
//     console.log(myVar);
//   }

//    function child2() {
//     console.log(child1);

//   }
// }


// function increament() {
//   let count = 0;
//   count++;
//   return count;
//   // console.log(`Count : ${count}`);

// }

// let count1 = increament;
// let count2 = increament;

// console.log(count1()); // 1
// console.log(count1());

// console.log(count2());
// console.log(count2());


/////////////////// closure


// function counter(){
//   let count =0;
//   function increament(){
//     // count++;
//     // console.log(`Counter: ${count}`);
//    return ++count;
//   }

//   return increament;
// }

// let count1 = counter();
// let count2 = counter();

// console.log(count1());
// console.log(count1());

// console.log(count2());

// count1()

// count2()
// count2()

////////////////// Ternary operator 

// condition ?  abcd : xyz

// console.log(-1 ? 'Truthy value': 'Falsy Value');


/////////////

let isLoggedIn = true;
console.log(isLoggedIn ? 'User id logged in' : 'signout');

/////////////

const num = 0;

let result =
  num > 0 ? 'Positive'
    : num === 0 ? 'Equal to zero'
     : num < 0 ? 'Negative'
      : 'NaN-----';


console.log(result);




