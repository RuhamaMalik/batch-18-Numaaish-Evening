// function* abcd() {
//   // yield 'hello'
//   let val = yield;
//   let val2 = yield;
//   let val3 = yield;

//   console.log(val );
//   console.log(val2);
//   console.log(val3);
  
  
// }

// let g = abcd();
// g.next();
// g.next('hello')
// g.next('Hello sana');
// g.next('bye bye');


///////////////////////

// function* generator(){

// yield* 'statement 1';
// yield* ['apple','strawberry',"mango","lichi"];
// yield {id:1,cast:'Malik'}

// }
// let g = generator();

// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());


///////////////////////// array methods

///////////// map, forEach

// let arr = [1,2,3,4,5];

// let result = arr.map((e,i)=>  e * 2)

// arr.forEach((e)=> console.log( e + 5)
// );

// console.log(arr);
// console.log(result);

/////////////////  find | filter


// let arr = [1,2,5,3,4,5,6,7,8,5,9];
// let result = arr.find((e)=>  e === 5   );
// let result = arr.find((e)=>  e %2!==0   );
// let result = arr.find((e)=>  e >15 );

// let result = arr.filter((e)=>  e %2!==0   );
// let result = arr.filter((e)=>  e === 5   );
// let result = arr.filter((e)=>  e >15   );


// console.log(result);


///////////////////// reduce

// let arr = [1,2,3,4,5];

// reduce(callback,accumulator(optional))

// let result = arr.reduce((acc,e)=> acc + e, 5)
// console.log(result);// 20           


// let result = arr.reduce((acc,e)=> acc + e)
// console.log(result); // 15   

// let arr = ["ruhama","gull"];

// let result = arr.reduce((acc,e)=> acc + e);
// console.log(result); // ruhamagull 

/////////////// some | every --- boolean

let arr = [1,2,3,4,5];
// let result = arr.some((e)=> e > 8 );
// console.log(result);

// let result = arr.every((e)=> e > 0 );
// console.log(result);

// let result = arr.filter((e)=> e!== 3);
// console.log(result);

