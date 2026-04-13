// console.log('Before');

// try {
//   alrt('hello');
//   throw new Error('masla alert mai hai');
// } catch (e) {
//   console.log(e.message);
// }finally{
//   console.log('Mai dono k saath hun!');
// }

// console.log('After');


// document.getElementById('btn').addEventListener('click',function(){
//   console.log('Success');
// })

// function myFunc(e){
//   console.log('Success');
// }


// document.getElementById('btn').addEventListener('click',myFunc)



// document.getElementById('form').addEventListener('submit', function (event) {

//   event.preventDefault();
//   console.log(event);

//   let name = document.getElementById('name');
//   console.log(name.value);
// })

// let str = 'cat';

// console.log(str[2]);

// try {
//   let x = 10 / 0;
//   if(x === Infinity){
//     throw new Error("Cannot divided by 0")
//   }

// } catch (error) {
//   console.log(error);

// }


let fruit = 'apple';

function abcd(a, b, c, d) {
   fruit = 'banana';
  // console.log(arguments); // arguments
  // console.log(arguments.length); // 3 arguments
  // console.log(abcd.length); // 4 parameters length

console.log('inner >>> ' , fruit);

}
abcd("a", "b", "c");
console.log('outer >>> ' , fruit);