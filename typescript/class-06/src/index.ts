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






//// Type Casting
//// Generics
//// ENUMS
//// Decorators
//// Function Overloading
//// Type Guard
