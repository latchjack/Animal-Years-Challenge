// Variables
var firstYear = 15;
var secondYear = 9;
var onwardYear = 4;

var usersAge;
// var usersAge = prompt('how old are you?');

// DOM Selectors
const texty = document.querySelector('#replace');

const butt = document.querySelector('#submitButton')

//Function
function convertAge() {
  var usersAge = prompt('how old are you?');

  if(usersAge = firstYear) {
    console.log('your cat age is 0');
  } else if (usersAge > firstYear) {
    console.log('your cat age is 15');
  } else if (usersAge > secondYear) {
    console.log('your cat age is 24');
  } else if (usersAge > onwardYear) {
    console.log('your cat age is 28');
  } else (usersAge > 28); {
    usersAge += 4;
}

butt.addEventListener('click', function(e) {
    console.log(usersAge);
    texty.textContent = convertAge();
});
}
