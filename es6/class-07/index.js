/////////////// // Symbol

// let val1 = Symbol('abcd');
// let val2 = 'abcd';

// console.log(val1 === val2);


// let id = Symbol("id123");
// alert(id.toString()); // Symbol(id123)
// alert(id.description)

///////////// use with obj

// let rollNo = Symbol("rollNo");

// let stu = {
//   name:"Saba",
//   age:10,
//   [rollNo.description]: 12345
// }
// console.log(stu["rollNo"]);

////////////// Iterator

// const obj = {}
// const arr = [1,2,3,4,5]

// console.log(typeof obj[Symbol.iterator]);
// console.log(typeof arr[Symbol.iterator]);


//////////////////////

// let arr = [1,2,3,4,5];
// let _iterator = arr[Symbol.iterator]();


// console.log(_iterator.next());
// console.log(_iterator.next());

// console.log("----------------- ");


// _iterator.next();
// _iterator.next();

// console.log(_iterator.next());
// console.log(_iterator.next());
// console.log(_iterator.next());
// console.log(_iterator.next());
// console.log(_iterator.next());

////////////////// custom iterator

// function customIterator(arr) {
//   let index = 0;
//   return {
//     next() {
//       if (index < arr.length) {
//         return {
//           value: arr[index++],
//           done: false
//         }
//       } else {
//         return {
//           done: true,
//           value: undefined
//         }
//       }
//     }
//   }
// }

// let iterator = customIterator([1,2,3,4,5]);

// // console.log(iterator.next());

// for (let ele of iterator){ // error
// console.log(ele);
// }

/////////////////////////////////////



// function customIterator(arr) {
//   return {
//     [Symbol.iterator]() {
//       let index = 0;
//       return {
//         next() {
//           if (index < arr.length) {
//             return {
//               value: arr[index++],
//               done: false
//             }
//           } else {
//             return {
//               done: true,
//               value: undefined
//             }
//           }
//         }
//       }
//     }
//   }
// }

// let iterator = customIterator([1, "apple", 3, 4, 5]);
// let kuchBhi = iterator[Symbol.iterator]()

// // console.log(kuchBhi.next());
// // console.log(kuchBhi.next());

// for(let ele of iterator){
// console.log(ele);

// }



