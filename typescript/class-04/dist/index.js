////////// OOPS
/// class --- blueprint of object
/// object --- instance of class
/// 1 - Inheritance 
/// 2 - Polymorphism
/// 3 - Encapsulation
/// 4 - Abstraction
// class Person {
//   name: string;
//   id: number;
//   age: number;
//   constructor(n: string, id: number, a: number) {
//     this.name = n;
//     this.id = id;
//     this.age = a;
//   }
// }
// let person1 = new Person('Amna',121, 10);
// let person2 = new Person('Saba',122, 10);
// console.log(person1);
// console.log(person2);
/////////////// Access Modifiers
/// public
/// private
/// protected
/// readonly
// class Product {
//   readonly id:number;
//   public title: string;
//   private price: number;
//   public category: string;
//   constructor(t: string, p: number, c: string, id:number) {
//     this.title = t;
//     this.price = p;
//     this.category = c;
//     this.id = id;
//   }
// }
// let prod1 = new Product('Laptop',50000, 'electronic', 111);
// // prod1.title = 'Hp';
// // prod1.id = 8989;
// console.log(prod1);
// console.log(prod1.id);
// console.log(prod1.title);
// console.log(prod1.category);
// // console.log(prod1.price); // error
////////////////////////// short method
// class Product {
//   private colours:string[] = [];
//   discount:string = '';
//   constructor(
//     readonly id: number,
//     public title: string,
//     private price: number,
//     public category: string) {}
// }
// let prod1 = new Product( 111,'Laptop',50000, 'electronic');
// let prod2 = new Product( 111,'Laptop',50000, 'electronic');
// // prod1.colours.push('gray','black','white');
// // prod1.colours = [];
// // prod1.colours.length = 0;
// console.log(prod1);
// prod2.discount = '70%';
// console.log(prod2);
////////////////////// Getter / Setter
class Student {
    constructor(name, batch, dob) {
        this.name = name;
        this.batch = batch;
        this.dob = dob;
        this.subjects = [];
    }
    addSubjects(subj) {
        this.subjects.push(subj);
    }
}
let stu1 = new Student('Sara', 18, '7-july-2025');
stu1.addSubjects('English');
console.log(stu1);
export {};
//# sourceMappingURL=index.js.map