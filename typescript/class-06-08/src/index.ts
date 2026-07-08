///////////////////////////// Abstraction

abstract class Animal {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  eat(): void {
    console.log(`${this.name} khana kha rahi hai!`);
  }

  abstract makeSound(): void;

}


// let animal = new Animal('cat'); // error


// class Cat extends Animal {

//   constructor(n: string) {
//     super(n);
//   }

//   makeSound(): void {
//     console.log('Meow Meow!');
//   }

// }


// class Dog extends Animal {

//   constructor(n: string) {
//     super(n)
//   }

//   makeSound(): void {
//     console.log('Bhao bhao!');
//   }
// }

// let cat1 = new Cat('Tom');
// let dog1 = new Dog('Tommy');

// cat1.makeSound();
// dog1.makeSound();

////////////////////////////// polymorphism


// abstract class Shape {
//   abstract getArea(): number;
// }

// class Circle extends Shape {

//   constructor(public radius: number) {
//     super();
//   }

//   getArea(): number {
//      return Math.PI * this.radius * this.radius;
//   }
// }


// class Square extends Shape {

//   constructor(public side: number) {
//     super();
//   }

//   getArea(): number {
//      return   this.side * this.side;
//   }
// }


// let circle = new Circle(23);
// let sq = new Square(40);

// console.log(circle.getArea());
// console.log(sq.getArea());


/////////////////////// Tuples

// type Test = string | number;
// let fruits:Test[]= ['apple','mango','banana',67];

// fruits[3] = 'cherry';
// console.log(fruits);

// let error:[string, number] = ['Page Not Found', 404];

// // error[2] = 'abcd'; /// error
// error.push('abcd');
// console.log(error);

////////////////// singleton 

// class Setting {
//   // 1
//   private static instance: Setting;
//   static SI: number = 3.142;

//   // 2

//   private constructor() { }


//   // 3

//   static getInstance() {
//     if (!this.instance) {
//       this.instance = new Setting();
//     }

//     return this.instance;
//   }

// }

// console.log(Setting.SI);

// let st1 = Setting.getInstance();
// let st2 = Setting.getInstance();

// console.log(st1 === st2);


// let setting = new Setting(); // error

// console.log(Math.PI); // static property
// console.log(Date.now()); // static method



////////////////////////// Union | Intersection

// type A = {
//   id: number;
//   title: string;
// }

// type B = {
//   batch: string;
//   colour: string;
//   age: number
// }


// type C = A | B

// let obj: C = {
//   id: 1,
//   title: 'Abcd Product',

//   // batch:'18-evening',
//   colour: 'pink',
//   age: 10,

//   // abcd:'xyz' // error
// }


// type D = A & B

// let obj:D = {
//    id: 1,
//   title: 'Abcd Product',

//   batch:'18-evening',
//   colour: 'pink',
//   age: 10,
// }

// type A = {
//   type:'A';
//   id: number;
//   title: string;
// }

// type B = {
//   type:'B';
//   batch: string;
//   colour: string;
//   age: number
// }

// type C = A | B

// let obj:C = {
//   type:'A',
//   id:10,
//   title:'Abcd',
//   // colour:'red' // error
// }


////////////////////////// Interface

interface A {
  name: string,
  subject: string,
  goodBye(): void
}

interface B {
  age: number;
  email: string
}

interface C extends A, B {
  contact: number,
  image?: string
}

interface D extends C { }

// let obj:C ={
//   name:'XYZ',
//   subject:'Math',
//   goodBye(){
//     console.log(`Bye bye ${this.name}`);
//   },
//   age:10,
//   email:'abcd@gmail.com',
//   // skills:[],
//   contact:732637232
// }

// class Person implements C {
//   constructor(
//     public name: string,
//     public age: number,
//     public subject: string,
//     public email: string,
//     public contact: number,
//     public image: string=''
//   ) { }

//   goodBye(): void {
//     console.log(`Bye Bye ${this.name}`);

//   }
// }

// let person1 = new Person('Sara',10,'English','sara@gmai.com',3434343);
// person1.goodBye();

///////////////////////////////

// type Data = {abcd:string}
// type Data = {abcd:string}

// interface Data {name:string}
// interface Data {age:number}

// let obj:Data = {
//   name:'Hina',
//   age:10
// }

///////////////// Type Casting

// <>   as

// let str:any = 'abcd';
// console.log(str.toLowerCase());
// console.log(Math.round(str));


// let str:unknown = 'abcd';
// console.log((str as string).toLowerCase());
// console.log((<string>str).toUpperCase());


// let num:unknown = 67.81;
// console.log(Math.round(num as number));



////////// Generics






//// ENUMS
//// Decorators
//// Function Overloading
//// Type Guard
