////////// objects - reference datatype ,,,, key:value , {}

// let obj = {
//   preopertyName : 'propertyVal',
//   key : 'value'
// }

// let user = {
//   name:"Ayesha",
//   age:10,
//   email:"ayesha@gmail.com",
//   contact:"0000000000",
//   hobbies:['reading','cooking','sleeping'],
//   address: {
//     street:"street 1",
//     zipCode:"848334",
//     city:"karachi"
//   },
//   isActice:true
// };


// console.log(user);

////////// dot notation

// console.log(user.name);
// console.log(user.email);
// console.log(user.hobbies[0]);
// console.log(user.hobbies[1]);
// console.log(user.hobbies[2]);
// console.log(user.address.zipCode);
// console.log(user.address.street);





////////// bracket notation ['propName']

// console.log(user['name']);
// console.log(user['hobbies'][2]);
// console.log(user['address']['street']);
// console.log(user['address'].street);

// let propName = 'color';
// let propVal = 'black';

// let product = {
//   'my title':"shoes",
//   price:"$100",
//   size:['sm','md','lg','xl','xxl'],
//   [propName+'s']:propVal,
// }

// console.log(product.price);
// console.log(product.colors);
// console.log(product['my title']);


// product.description = 'my shoes description.';
// product.price = '$150';

// delete product.size;
// console.log(product);

// console.log('price' in product); // true
// console.log('size' in product); // false

let employ = {
  id: 1,
  name: 'ABCD',
  role: 'clerk',
  department: 'IT',
  greet: function () {
    return `Hello ${this.name}`;
  }
}

let a = employ.greet();
console.log(a);

// let arr = [2,66,782,2];

// for(let num of arr){
// console.log(num);

// }


// getTotalMarks
// getPercentage

// let student={
//   rollNo:100,
//   name:'abcd',
//   class:'X',
//   marks:[78,50,75,67,57],
//   getTotal:function(){
//     let total=0;
//     for(let i=0;i<this.marks.length;i++){
//       total += this.marks[i];
//     }
//     return total;
//   },
//   getPercentage:function(){
//     let percent = this.getTotal()*100/500;
//     return percent;
//   }
// }

// document.writeln(`Total Marks: ${student.getTotal()}<br>Percentage: ${student.getPercentage()}`)

///////////// Constructor

function ObjctConstructor(rollNo, stName, stClass, subjects) {
  this.rollNo = rollNo,
    this.name = stName,
    this.class  = stClass,
    this.subjects = subjects
}

let stu1 = new ObjctConstructor('001','Saba','5 A',['eng','math','urdu']);
let stu2 = new ObjctConstructor('002','Naba','8 A',['isl','science','arts']);

console.log(stu1);
console.log(stu2);
