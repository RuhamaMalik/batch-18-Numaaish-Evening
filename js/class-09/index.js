/////////////// for , while , do while
// let i = 1
// for (i; i <= 10; i++) {
//   console.log(i);
// }

//////////

// let i = 11;
// while(i<=10){
//    console.log(i);
//    i++;
// }


//////////

// let i = 11;
// do {
//   console.log(i);
//   i++;
// } while (i<=10);



////////////////////// example

//////////////// print table


// for(let i=1; i<=10; i++){

// // console.log(`2 X ${i} = ${2*i}`);

// // console.log("2 X " + i + " = " + (2*i));

// document.writeln(`2 X ${i} = ${2*i} <br> `)

// }


////////////////

// let a=prompt("ghg"),b = "hello b",c;

// c="hello";
// console.log(a);
// console.log(b);
// console.log(c);


/////////////////////

// let num = +prompt("Enter Number");
// let startNum = +prompt("Enter start Number");
// let endNum = +prompt("Enter End Number");


// if(endNum >= startNum){
//   for (let i = startNum; i <= endNum; i++) {
//   console.log(`${num} X ${i} = ${num * i}`);
// }
// }else{
//   console.log("Invalid sequence");
// }

let users = ["umaima", "momina", "ayesha", "hamna", "zoha",
  "umaima", "momina", "ayesha", "hamna", "zoha",
  "umaima", "momina", "ayesha", "hamna", "zoha"
];

// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// document.writeln(users)

// for(let i=0; i<users.length; i++){
// console.log("Hello " + users[i]);
// }


// document.writeln(`  <div class="d-flex flex-wrap align-items-center justify-content-center gap-3" style="min-height: 50vh;">`)

// for (let i = 0; i < users.length; i++) {

//   document.writeln(`
//     <div class="card" style="width: 18rem;">
//   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmDhoCJhSdCu73dVnzs3rcGQi_Q67-Wk3KBQ&s" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${users[i]}</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     `)

// }


// document.writeln("  </div>")

///////////////////////


const cities = ["peshawar", "islamabad", "abottabad", "quetta", "lahore"];
let userCity = prompt("Enter your city!");
let isCityFound = false;

for (let i = 0; i < cities.length; i++) {
  if (userCity === cities[i]) {
    isCityFound =true;
    console.log("Cleanest city!");
    break;
  }
}

if(isCityFound === false){
  console.log("City not Found!");

}







