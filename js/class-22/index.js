// console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[1]);


//////////// nodeType

// let div = document.getElementById('box');
// console.log(div.nodeType); // 1

// element ==  1
// attribute = 2
// text node = 3
// comment === 8

// console.log(div.childNodes.length);

// let counter = 0;
// for (let i = 0; i < div.childNodes.length; i++) {
//   if (div.childNodes[i].nodeType === 1) {
//     counter++;
//   }
//   if (counter === 3) {
//     div.childNodes[i].innerText = "------- updated"
//   }
// }

// console.log(counter);

// console.log(div.children);
// div.children[1].innerText = 'zindagi gulzar hai!'




let div = document.getElementById('box');

// console.log(div.firstChild);
// console.log(div.firstElementChild);
// console.log(div.lastChild);
// console.log(div.lastElementChild);
// console.log(div.parentNode);
// console.log(div.nextSibling); // text
// console.log(div.nextElementSibling); // text


// console.log(div.nodeName); // DIV

// let alPara = document.getElementsByTagName('p')
// console.log(alPara[2].childNodes[0].nodeValue);

///////////////////////// 65

let h1 = document.getElementById('abcd');

// console.log(h1.hasAttribute('class')); //true
// console.log(h1.hasAttribute('src')); // false

// console.log(h1.getAttribute('class')); // myHead
// console.log(h1.getAttribute('src')); // null


// h1.setAttribute('custom','my value')

console.log(h1.attributes[0].nodeName);
console.log(h1.attributes[0].nodeValue);
