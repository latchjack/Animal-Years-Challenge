const catYears = 15;
const dogYears = 15;
const texty = document.querySelector('#replaceMe');
const userYears = prompt('how old are you?');

const numby = userYears * catYears;

// function catNum() {
//   var totalYears = userYears * catYears;
//   return totalYears;
// }


converter.addEventListener("input", function(e) {
  texty.textContent = numby;
});