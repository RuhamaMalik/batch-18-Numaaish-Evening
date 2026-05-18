
// setTimeout(()=>{
//   console.log("pizza delivered");
//   setTimeout(()=>{
// console.log("cold drink delivered");
//      setTimeout(()=>{
//       console.log("cake delivered");
      
//      },1000)
//   },1000)
// },1000)



//promise syntax//
//resolve-then-good news
//reject-catch-bad news
// let promise=new Promise((resolve, reject) => {
  
// })

// let agePromise=new Promise((resolve, reject) => {
//   let age=20;
//   if(age <=10){
//     resolve("YOU ARE ALIGEBLE FOR VOTE")
//   }
//   else{
//     reject("not allowed")
//   }
// })
// agePromise
// .then((data)=>{
//   console.log(data);
  
// })
// .catch((error)=>{
// console.log(error);

// });



//login system


// function login() {
  
//   return new Promise((resolve, reject) => {
//     let loginSuccess=true;
//     if(loginSuccess){
//       resolve("you re successfully login")
//     }
//     else{
//       reject("login failed")
//     }
//   });
// }
// function getProfile() {
//   return new Promise((resolve, reject) => {
//     let profileFound=true;
//     if(profileFound){
//       resolve("profile data received")
//     }else{
//       reject("Profile not found")
//     }
//   })
// }

// function dashboard() {
//   return new Promise((resolve, reject) => {
//     let profiledashboard=true;
//     if(profiledashboard){
//       resolve("profile dashboard data received")
//     }else{
//       reject("Profile dashboard not found")
//     }
//   })
// }

// login()
// .then((data)=>{
//   console.log(data);
//   return getProfile()
  
// })
// .then((data)=>{
//   console.log(data);
//   return dashboard()
  
// })
// .then((data)=>{
//   console.log(data);
  
// })
// .catch((error)=>{
//   console.log(error);
  
// })


// 



// console.log("start");
// setTimeout(()=>{
//   console.log("Data loaded");
  
// },3000)
// console.log("END");



// console.log("START");
// // console.log("PENDING");
// console.log("END");

// login()
// .then(()=>{
//   return getProfile();
// })
// .then(()=>{
//   return getPosts();
// })
// .catch(()=>{
//   console.log(error);
  
// })


function orderFood() {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve("pizza delivered")
    },3000);
  });
  
}
orderFood()
.then((data)=>{
  console.log(data);
  
})
async function food(){
  let result=await orderFood();
  console.log(result);
  
}
food();