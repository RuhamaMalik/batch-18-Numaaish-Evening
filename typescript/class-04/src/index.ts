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

// class Student {

//   private subjects: string[] = [];

//   constructor(public name: string, readonly batch: number, private dob: string) { }

//   addSubjects(subj: string) {
//     this.subjects.push(subj);
//   }

//   getSubjects(): string[] {
//     return this.subjects;
//   }

// }

// let stu1 = new Student('Sara', 18, '7-july-2025');
// stu1.addSubjects('English');
// stu1.addSubjects('Math');
// console.log(stu1.getSubjects());


/////////////////////////// Encapsulation


// class Student {

//   private subjects: string[] = [];
//   private _hobbies: string[] = [];

//   constructor(
//     public name: string,
//     readonly batch: number,
//     private _dob: string,

//   ) { }

//   get dob() {
//     return this._dob;
//   }

//   set dob(hbd: string) {
//     if(!hbd){
//      throw Error('dob should not be empty!')
//     }
//     this._dob = hbd;
//   }

//   get hobbies(): string[] {
//     return this._hobbies;
//   }

//   set hobbies(h: string) {
//     this._hobbies.push(h);
//   }

// }


// let st1 = new Student('Ayesha', 18, '12-12-12');

// st1.dob = '01-12-15';
// console.log(st1);

// st1.hobbies = 'reading';
// console.log(st1.hobbies);


/////////////////////////////// Inheritance

/////////// parent class / super / base
/////////// child class / sub / drived


// class Product { // base class

//   constructor(
//       _id: number,
//     public title: string,
//     readonly price: number
//   ) { }

// }

// class ElectronicProduct extends Product {

//   constructor(
//     _id: number,
//     title: string,
//     price: number,
//     private _brand: string,
//     private _warranty: string
//   ) {
//     super(_id, title, price)
//   }

// }

// let mobile = new ElectronicProduct(123,'SAMSUNG',40000, 'A06','2 days');
// console.log(mobile);



////////////////////////////////////////

let text = document.getElementById('input')! as HTMLInputElement;

let form = document.getElementById('form')! as HTMLFormElement;
let btn = document.getElementById('btn');


/////////////// button and enter key

// form.addEventListener('submit',(e)=>{
// e.preventDefault();
// console.log(text.value);
// })

////////////  without button

// text.addEventListener('keydown', (e) => {
//   if (e.key === 'Enter') {
//     e.preventDefault();
//       console.log(text.value);
      
//   }
// })