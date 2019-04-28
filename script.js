var userAge = prompt("how old are you?");
var userAgeOriginal = userAge;

const texty = document.querySelector('#replace');
const numButton = document.querySelector('#randomButton');

numButton.addEventListener('click', function(e) {
  texty.textContent = catYears();
});


function catYears() {
  userAge += 15;
  userAge += 9;
  userAge * userAgeOriginal;
}

console.log(catYears(userAge));
