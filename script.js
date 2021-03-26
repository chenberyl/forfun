// document.getElementById("text").addEventListener("click", switchText);
//
// function switchText() {
//   var x = document.getElementById("text");
//   if (x.innerHTML === "Good morning!") {
//     x.innerHTML = "Good night!";
//   } else {
//     x.innerHTML = "Good morning!";
//   }
// }

document.getElementById("text").addEventListener("click", switchText);

function switchText() {
  var x = document.getElementById("text");
  if (x.innerHTML === "Good morning!") {
    x.innerHTML = "Good night!"; document.body.style.backgroundColor = '#1D2D76';
  } else {
    x.innerHTML = "Good morning!";
    document.body.style.backgroundColor = '#FFBE1D';
  }
}
