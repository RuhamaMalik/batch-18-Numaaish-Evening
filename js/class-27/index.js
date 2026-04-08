/////// Filling the window with content


// function TestPopupBlocker (){
//   let test = window.open('','','width=500,height=500');
//   if(test === null  || test === undefined){
//     alert('Please disable your popup blocker.');
//   }

//   test.close();
// }


// function checkForLastName() {
//   if (document.getElementById("ln").value.length === 0) {
//     alert("Please enter your last name");
//     document.getElementById("ln").focus();
//     return false;
//   }
// }


// function check() {
//   if (document.getElementById('dropdown').selectedIndex === 0) {
//     alert('Please select a city');
//     return false;
//   }

//  console.log(document.getElementById('dropdown').value);

// }


// function check(id,msg) {
//   if (document.getElementById(id).selectedIndex === 0) {
//     alert(msg);
//     return false;
//   }

// //  console.log(document.getElementById('dropdown').value);

// }

// function validateRadios() {
//   var radios = document.getElementsByName("r1");
//   for (var i = 0; i < radios.length; i++) {
//     if (radios[i].checked) {
//       return true;
//     }
//   }
//   alert("Please check one.");
//   return false;
// }

// console.log(isNaN(parseInt('5'))); //false
// console.log(isNaN(parseInt('A'))); // true

function validateEmail() {
  var email = document.getElementById("email").value;
  let addressIsLegal = true;

  if (email.indexOf(" ") !== -1) {
    alert("No spaces allowed in address");
    return false;
  }

  //// @abcgmailc.om

  if (email.indexOf("@") < 1 || email.indexOf("@") > email.length - 5) {
    addressIsLegal = false;
  }

  if (email.indexOf(".") - email.indexOf("@") < 2 || email.indexOf(".") > email.length - 3) {
    addressIsLegal = false;
  }


  if (addressIsLegal === false) {
    alert("Please correct email address");
    return false;
  }



}
