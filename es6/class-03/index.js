///////////// Template Literals ``

// console.log(`
//   multi
//   line 
//   text
//   `);

// console.log(`5 + 8 = ${5+8}`);

// function sum (a,b){
// return a+b;
// }
// console.log(`Total = ${sum (7,3)}`);

// console.log(`
//   "Hello",
//   'world',
//   "'hello'"
//   `);

///////////// Recursion


// function doSomething(n) {

//   if (n === 0) {
//     console.log('task complete');
//     return;
//   }

//   console.log('working...', n);
//   doSomething(n - 1); // 2-1
// }

// doSomething(10)


///////////////// example

// let fruits = ['apple', 'mango', 'strawberry', 'cherry', 'peach'];


// function printFruits(n) {

//   if (n >= fruits.length) {
//     return;
//   }
//   console.log(fruits[n]);
//   printFruits(n+1)
// }
// printFruits(0)


/////////////// ascending

// let arr = [];

// function myFunc(n) {
//   if (n >10) { // base condition
//     return;
//   }
//   arr.push(n);
//   myFunc(n + 1);
// }

// myFunc(1);

// console.log(arr);

//////////////////// Destructuring

// let arr = [1, 2, 3, 4, 5, 6];

// let val1 = arr[0]
// let val2 = arr[1]

// const [val1,val2,val3,val4,val5,val6='default value'] = arr;

/// ... Rest operaator
// const [val1,val2,val3, ...val] = arr; 

// let [val1,val2,,,val5,val6] = arr;

// console.log(val1);
// console.log(val5);
// console.log(val6);
// console.log(val);


///////////////////////////////////////////// 

// let obj = {
//   title: "zindagi gulzar hai",
//   id: 1,
//   _class: '5 to 7',
//   age: 20
// }

// const {title,id,_class,age=10} = obj;
// const { title, id, ...restObj } = obj;

// let {title,age} = obj;

// console.log(title);
// console.log(_class);
// console.log(age);
// console.log(restObj);

///////////////////////////// nested desctructuring


// let fruits = ['mango', ['red apple', 'green apple'], 'strawberry', 'cherry', 'peach'];

// let [f1, [apple1, apple2], f3] = fruits;

// console.log(f1);
// console.log(f3);
// console.log(apple1);
// console.log(apple2);


let user = {
  username: 'Ayesha',
  age: 10,
  rollNo: '00001',
  _location: {
    street: 1,
    house: 'bh-123',
    area: 'Bahria society',
    city: "karachi",
    country: 'Pakistan'
  }
}

// let { username, rollNo, _location, _location:{house}} = user;

// console.log(rollNo);
// console.log(_location);
// console.log(house);


function abcd ({username,age,_location:{area}}){
console.log(username);
console.log(age);
console.log(area);


}

abcd (user)


