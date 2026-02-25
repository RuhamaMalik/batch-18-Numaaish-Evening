// console.log(typeof   55.678.toFixed(2));//

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//  let date = new Date();
//  let dayIndex = date.getDay();
//  console.log(dayNames[dayIndex]);
 

// let date = new Date();

// console.log(date.getFullYear());
// console.log(date.getTime());

/////////// 33 - Specifying a date and time

// let futureDate = new Date("August 10, 2026");
let futureDate = new Date("February 28, 2026");
let today = new Date("February 25, 2026");

let msToday = today.getTime();
let msFutureDate = futureDate.getTime();

let difference = msFutureDate - msToday;

console.log(difference/(1000*60*60*24) + " days"); // 3 days
