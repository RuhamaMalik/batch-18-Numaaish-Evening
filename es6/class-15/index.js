// let myPromise = new Promise((resolve, reject) => {
//   let error = false;

//   setTimeout(() => {
//     if (!error) {
//       resolve({ name: "Ruhama" });
//     } else {
//       reject("Something went wrong! XYZ")
//     }
//   }, 1000)


// })

// myPromise
//   .then((user) => {
//     console.log(user);
//     return user.name;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((err) => {
//     console.log(err);
//   })

///////////////////////// async await

// async function consumeMypromise() {
//   try {
//     let response = await myPromise;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumeMypromise()

// console.log("After");

/////////////////////////


// fetch("https://fakestoreapi.com/products")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data)=>{
//     console.log(data);

//   })
//   .catch((err) => {
//     console.log(err);
//   })

// const fetchProducts = async () => {
//   try {
//     let response = await fetch("https://fakestoreapi.com/productss");
//     let products = await response.json();
//     console.log(products);

//   } catch (error) {
//     console.log(error);

//   }
// }


// fetchProducts();

///////////////////////////////////////// 


// const id = setInterval(() => {
//   console.log("hello");
// }, 1000);


// setTimeout(() => {
//   clearInterval(id);
// }, 5000)

// document.getElementById("btn").addEventListener('click',()=>{
//   clearInterval(id);
// })

////////////// Map

// let key = { name: "abc" }

// let obj = {
//   "name": "Ruhama",
//   age: 10,
//   [key]: "Ten"
// }
// console.log(obj);

// let myObj = new Map([
//   ["name","Ruhama"],
//   ["email", "ruhama@gmail.com"],
//   ["address",{li:"test 1",l2:"test 2"}]
// ]);

// let myObj = new Map();

// myObj.set("name", "Saba");
// myObj.set("age", "10");
// myObj.set(key, "test");

// console.log(myObj);
// console.log(myObj.size);

// console.log(myObj.get(key));

// console.log(myObj.has("name"));
// myObj.delete("name");

// myObj.clear();
console.log(myObj);



// for(let [key,value] of myObj){
// console.log(key , " ---------- ", value);
// }
















