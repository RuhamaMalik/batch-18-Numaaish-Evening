//////////////// call, apply, bind

// let user = {
//   name:"Sana",
//   greet(){
//      console.log(`Hello ${this.name}`);  
//   }
// }

// let employ = {
//   name:"Saba",
//    greet(){
//      console.log(`Hello ${this.name}`);  
//   }
// }


/////////////////////

// function greet(msg,msg2){
//    console.log(`${msg} ${this.name} ${msg2}`); 
// }

// let user ={
//   name:"Sana",
// }

// greet.apply(user, ['Hello', 'Eid Mubarak!'])
// greet.call(user, 'Hello', 'Eid Mubarak!')

// let a = greet.bind(user, 'Hello', 'Eid Mubarak!');

// a();
// a();
// a();
// a();

// let employ ={
//   name:"Saba"
// }


// greet.apply(employ, ['Hi','Hajj Mubarak'])
// greet.call(employ, 'Hi','Hajj Mubarak!')
// let b = greet.bind(employ, 'Hello', 'Bakra Eid Mubarak!');
// b()

////////////////////////////

// let car1 = {
//   brand: "Honda",
//   showBrand() {
//     console.log(`This car is ${this.brand}`);
//   }
// }

// let car2 = {brand:"Suzuki"}
// let car3 = {brand:"BMW"}

// car1.showBrand.call(car2)
// car1.showBrand.apply(car3)
// car1.showBrand();


////////////////////////////

// let sf = {
//   title: 'Sun Flower',
//   colour: "yellow",
//   details() {
//     console.log(`${this.title} is ${this.colour}`);
//   }
// }


// document.getElementById('btn').addEventListener('click', sf.details.bind(sf) )


////////////////////////////


// let numbers = [6,2,67,4,9,1,11,0];
// let result = Math.max.apply(null,numbers);
// let result = Math.max.call(null,34,4,68,2);
// console.log(result);



/////////////////////// local storage / session storage

// localStorage.setItem('token', 'sjhdus73647364734bn34')
// localStorage.setItem('theme', 'dark')

// console.log(localStorage.getItem('token'));
// localStorage.removeItem('token');
// localStorage.clear()

let user = {
  name:"Ruhama",
  age:10,
  email:"abc@gmail.com"
}


localStorage.setItem('user', JSON.stringify(user) );
console.log(JSON.parse(localStorage.getItem('user')));









