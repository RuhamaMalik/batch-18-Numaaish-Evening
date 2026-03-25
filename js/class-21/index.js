// function makeInvisible(){
//   document.getElementById("fish").className += " hide";
// }

// function makeVisible(){
//   document.getElementById("fish").className = ' img'
// }


// function bigFont(){
//   document.getElementById('para').style.fontSize = "20px";
// }


// const allPara = document.getElementsByTagName('p');

// allPara[2].style.color = 'crimson';
// console.log(allPara);


////////////////////////

let images = [
  "https://media.istockphoto.com/id/1469510156/photo/sunset-on-bell-pass-in-the-majestic-mcdowell-mountains.jpg?s=612x612&w=0&k=20&c=4OdXRIFwRhb4qM9jE8xFOjgI7c7Nf_Agz4v51TJ0NIE=",

  "https://t4.ftcdn.net/jpg/01/75/97/39/360_F_175973930_FOfQM7zFXsVuFLlz1H4PrU4YGZX14oFA.jpg",

  "https://images.pexels.com/photos/733174/pexels-photo-733174.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

  "https://cdn.magicdecor.in/com/2023/02/29205216/image-1686120722-6283.jpg",

  "https://cdn.marvel.com/content/2x/005smp_com_mas_mob_03_3.jpg",

  "https://variety.com/wp-content/uploads/2013/11/frozen2.jpg"



]

let currentIndex = 0;

function next() {
  const currentImg = document.getElementById("image");
  // //  console.log(currentImg.src);
  //  currentIndex++;
  //  currentImg.src = images[currentIndex]

  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  currentImg.src = images[currentIndex]
}


function prev() {
  let currentImg = document.getElementById('image');

  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }

  currentImg.src = images[currentIndex]
}