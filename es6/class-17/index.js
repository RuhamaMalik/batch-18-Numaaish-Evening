// localStorage.setItem('theme', 0);
// localStorage.setItem('isActive', true);
// localStorage.setItem('user', JSON.stringify({name:"ruhama"}));

// console.log(localStorage.getItem('theme'));

// console.log(!!('undefined' && 'ruhama'));

// console.log(!!(localStorage.getItem('isActive')));
// 'true' > false > true

// console.log(JSON.parse(localStorage.getItem('user')));


// localStorage.removeItem('isActive');

// localStorage.clear();


////////////////////

// sessionStorage.setItem('theme','dark');

/////////////// Object methods

// const proto = {
//   greet() {
//     return `Hello ${this.name}`;
//   },
//   sayBye(){
//     return ` Good bye`
//   },
//   isActive:true
// }

// let user = Object.create(proto);
// user.name = "Saba";
// user.id = 14343;

// console.log(user);


//////////////////// assign

// let objA = {
//   name: 'Saba',
//   age: 10
// }

// let objB = {
//   name: 'Ayesha',
//   isActive: true
// }

// let objD = {
//   skills: ['js', 'html', 'css']
// }

// let objC = {
//   profession: "Barber"
// }

// let mix = Object.assign({},objB,objA);
// console.log(mix);

//  Object.assign(objC,objB,objA,objD);
// console.log(objC);

// let test = { ...objA, ...objB, ...objC, ...objD }

// console.log(Object.keys(test));
// console.log(Object.values(test));
// console.log(Object.entries(test));// [[key,value],[]]


// let arr = [
//   ["name", "Ayesha"],
//   ["age", 10],
//   ["isActive", true],
//   ["profession", "Barber"],
//   ["skills", ["js", "html", "css"]]
// ]

// console.log(Object.fromEntries(arr));

// console.log(Object.hasOwn(test,'profession'));

// let objB = {
//   name: 'Ayesha',
//   isActive: true
// }


///// freeze -- khud padh lena

// Object.seal(objB);

// objB.id = 123; // x
// delete objB.name; // x

// objB.name = 'Amna' // updated

// console.log(objB);


// let entrie = [
//   ['name', 'Ruhama'],
//   ['age', 10],
//   ['skills', ['js', 'html']],
//   ['id', 123],
//   ['profession', 'Tailor'],
// ]

// let obj = Object.fromEntries(entrie);
// let abcd = Object.entries(obj);
// console.log(obj);
// console.log(abcd);

//////////////////// Set

// let numbers  = new Set();
// numbers.add(5)
// numbers.add(3)
// numbers.add(8)
// numbers.add(8)
// numbers.add(2)
// console.log(numbers.has(18));

// numbers.delete(3)
// numbers.clear();

// let arr = [2,5,8,5,5,3];

// let numbers  = new Set(arr);
// let numbersArr = [...numbers];
// console.log(numbers);
// console.log(numbersArr);

// arr = [...new Set(arr)];
// console.log(arr);







