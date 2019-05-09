const texty = document.querySelector('#replace');

const butt = document.querySelector('#submitButton');

butt.addEventListener('click', function(e) {
  texty.textContent = Hi;
});





// New code //

const grabNumber = document.querySelector('#usersAge');

 

grabNumber.addEventListener('click', function(e) {

  usersAge.textContent = Hello;

});

 

let firstYear = 15;

let secondYear = 9;

let followingYear = 4;

 

function convertAge(usersAge) {
if (usersAge < 0) {
  return "your cat age is 0";
} else if (usersAge === 1) {
  return "your cat age is 15";
} else if (usersAge >= 2) {
  return "your cat age is 24"
} else if (usersAge > 2) {
  return "your cat age is 28"
} else (usersAge >= 3) 
  return "your cat age is 32"
}
  