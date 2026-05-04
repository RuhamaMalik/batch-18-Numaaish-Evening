/////////////////// Generator

/// yield

// function* greet(){
// function *greet(){
//   console.log('Hello Bacho');
//   console.log('Hello Bacho');
//   console.log('Hello Bacho');
//   yield 'some data';

//   console.log('Hello class');
//   console.log('Hello class');
//   console.log('Hello class');
//   yield 'end data';
// }

// let g = greet();
// console.log(g.next());
// console.log(g.next());


///////////////////////


// function* generator (){
//   yield 'statement 1'
//   yield 'statement 2'
//   yield 'statement 3'
// }

// let g = generator();

// for(let str of g){
// console.log(str);
// }

////////////////////

function* inf() {
  let num = 1;
  while (true) {
    yield num++;
  }
}

let i = inf();

// console.log(i.next());
// console.log(i.next());

// for (let value of i) {
//   if (value === 5 || value === 8) {
//     continue;
//   } else if (value <= 10) {
//     console.log(value);
//   } else {
//     break;
//   }


// }










