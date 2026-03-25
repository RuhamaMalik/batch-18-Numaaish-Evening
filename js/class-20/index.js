// function fillCity() {
//   let zip = document.getElementById("zip").value;
//   let cityName;
//   switch (zip) {
//     case "1111":
//       cityName = "Karachi";
//       break;
//     case "2222":
//       cityName = "Lahore";
//       break;
//     case "3333":
//       cityName = "Islamabad";
//       break;
//     default: cityName = ''
//   }

//   document.getElementById("city").value = cityName;
// }


// document.getElementById("zip").addEventListener("blur", fillCity);

///////////////////////////// Read more

function expandPara() {
  let text = `Slow lorises are a group of several species of strepsirrhine primates which make up the genus
Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration
patterns that are species-dependent. The hands and feet of slow lorises have several adaptations
that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow
lorises have a toxic bite, a rare trait among mammals.
 <a href="JavaScript:void(0)" onclick="showLess()">Show less</a>
`;

  // document.getElementById("para").innerText = text;
  document.getElementById("para").innerHTML = text;


}



///////////////////////////// Show Less

function showLess() {
  let text = `
   Slow lorises are a group of several species of strepsirrhine primates which make up the genus
    Nycticebus. <a href="JavaScript:void(0)" onclick="expandPara()">Read more...</a>
  `
  document.getElementById("para").innerHTML = text;

}



//////////////////////// list

function displayList(){
  const list = `
    <ol>
      <li>Apple</li>
      <li>Mango</li>
      <li>Banana</li>
      <li>Grapes</li>
      <li>Orange</li>
    </ol>
    `;

    document.getElementById("box").innerHTML = list;
}
