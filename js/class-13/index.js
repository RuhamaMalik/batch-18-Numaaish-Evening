// let str = "Ramazan Mubarak";


// console.log(str.charAt()); // default 0
// console.log(str.charAt(8)); // M
// console.log(str.charAt(str.length-1)); // M
// console.log(str.charAt(str.length-3)); // r


// let text = `
//  Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos iure soluta ipsum a corporis cum ipsum ab expedita modi culpa.
// `

// text = text.replace("ipsum" , "xxxxxxxxxxxxxxxxxx");
// console.log(text);

// text = text.replace(/ipsum/gi,"xxxxxxxxxxxxxxxxxx");
//  console.log(text);




/////////////////////// 26 - Rounding Numbers


// console.log(Math.round(10.5)); // 11
// console.log(Math.round(10.7)); // 11
// console.log(Math.round(10.4)); // 10
// console.log(Math.round("10.4")); // 10
// console.log(Math.round("10.4 55.3")); // NaN
// console.log(Math.round("10.4 abcd")); // NaN
// console.log(Math.round(-5.6));// -6 
// console.log(Math.round(-5.4));// -5 



// console.log(Math.floor(10.9)); // 10
// console.log(Math.floor(-5.5)); // -6
// console.log(Math.floor(-5.9)); // -6
// console.log(Math.floor("-5.9")); // -6


// console.log(Math.ceil(7.4)); // 8
// console.log(Math.ceil(7.8)); // 8
// console.log(Math.ceil(-7.4)); // -7
// console.log(Math.ceil(-7.0)); // -7

// 7.4 => 8 , 7

////////////////////// 27 - Random Numbers
// 0(include)-1(exclude) - 16 decimal points

// console.log(Math.floor(Math.random()*10));
// console.log(Math.floor(Math.random()*100));

// console.log(0.85454545454545*10);


/////////////////////// guess game

let correctAns = Math.floor(Math.random() * 10) + 1;
let userAns = +prompt("Guess the number b/w 1-10");

if (userAns === correctAns) {
  console.log("Congratulations! you win");
} else if (userAns === correctAns + 1 || userAns === correctAns - 1) {
  console.log("Almost there! The correct Number is : " + correctAns);
} else {
  console.log("bhago yaha se : " + correctAns);

}

