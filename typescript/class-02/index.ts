////////////// type inference (implicit type)

// let x = "5";

// let x = 5;
// x="10";
// console.log(x);

///////// type annotation (explicit type)

// let x:number = 5;
// x= 10;
// // x='ten'; // error
// console.log(x);


///////////// type aliases
// DRY

// type User = {
//   profImg?: string;
//   name: string;
//   id: string;
//   isActive: boolean;
//   contact: number
// }

// let user: User = {
//   name: "Saba",
//   id: "xyz01",
//   isActive: true,
//   contact: 84738473,
//   profImg: "djfjjnfd"
// }

// let user2: User = {
//   name: "Sana",
//   id: "xyz02",
//   isActive: true,
//   contact: 456783222
// }


// console.log(user);
// console.log(user2);


/////////////////

// let fruits:string[] = ["apple","banana","mango"];
// console.log(fruits);

////////////////////////

// type User = {
//   profImg?: string;
//   name: string;
//   id: string;
//   isActive: boolean;
//   contact: number
//   }

// let users:User[] =[
// {
//   name:"Saba",
//   id:"xyz009",
//   isActive:true,
//   contact:3847387438,
// },
// {
//   name:"Sana",
//   id:"xyz009",
//   isActive:true,
//   contact:3847387438
// }
// ]


////////////////////

// type MyStr = string;
// let str:MyStr = 'abcd';


/////////////////////// interfaces 

// interface Teacher {
//   name: string;
//   subject: string;
//   experience: string;
//   salary: number;
//    bonus?:boolean
// }

// let teacher1:Teacher = {
//  name: "Amna",
//   subject:'English',
//   experience: '10 years',
//   salary:  100000,
// }
// console.log(teacher1);

///////////// Union |

// type Data = string | boolean | "hello pagal";

// let data:Data = 'apple';
// data = true;
// data = 'hello pagal';

// // data=5;// error


////////////// 

// type StrNum = string | number;
// let arr:StrNum[] = ["apple", 89];

//////////// Literal type with union

// type Size = 'md' | 'lg' | 'xl' | 40 | 41 |42;

// let size:Size = 40; 
// let size:Size = 'xxl'; // error

/////////////////////

type NullFunc = (a: number) => void;
type Func = (a: number) => number;

// let myFunc:NullFunc = (a)=>{
//   console.log(a , ' hello')
// };

// myFunc(55) 
// myFunc("6") // error

let myFunc2: Func = (a) => {
 return a;
}

console.log(myFunc2(10));
