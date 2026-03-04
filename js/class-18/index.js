
///////////////// vending Machine

// function selectProduct(button) {
//   switch (button) {
//     case "A":
//       return "Lays"
//     case "B":
//       return "Chips"
//     case "C":
//       return "Coke"
//     case "D":
//       return "Toffee"
//     default:
//       return "Invalid Input"
//   }
// }

// let product = selectProduct("A");
// console.log(product);

// console.log(selectProduct("D"));
// console.log(selectProduct("B"));


//////////////////// Events

// function greet(name) {
//   alert(`Hello ${name}`);
// }


function printName (e){
  e.preventDefault();
  let a = document.getElementById("name");
  console.log(a.value);
  a.value =""
}

document.getElementById("form").addEventListener("submit", printName)
