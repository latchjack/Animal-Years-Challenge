var userAge = prompt("how old are you?");
var userAgeOriginal = userAge;

const texty = document.querySelector('#replace');
const numButton = document.querySelector('#randomButton');

numButton.addEventListener('click', function(e) {
  texty.textContent = catYears();
});


function catYears() {
  var newAge = userAge += 15;
  var newAge = userAge += 9;
  var newAge = userAge * userAgeOriginal;
}

console.log(catYears(userAge));
