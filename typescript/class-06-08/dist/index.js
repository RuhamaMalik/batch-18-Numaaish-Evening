///////////////////////////// Abstraction
class Animal {
    constructor(n) {
        this.name = n;
    }
    eat() {
        console.log(`${this.name} khana kha rahi hai!`);
    }
}
export {};
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
//# sourceMappingURL=index.js.map