// New code //

let firstYear = 15;
let secondYear = 9;
let followingYear = 4;

const grabNumber = document.getElementById('usersAge');

const myBtn = document.getElementById('myButton');

myBtn.addEventListener('click', function(e) {
  console.log(grabNumber)
});

// grabNumber.addEventListener('click', function(e) {
//   function convertAge(usersAge) {
//     if (usersAge < 0) {
//       return "your cat age is 0";
//     } else if (usersAge === 1) {
//       return "your cat age is 15";
//     } else if (usersAge === 2) {
//       return "your cat age is 24"
//     } else if (usersAge > 2) {
//       return "your cat age is 28"
//     } else 
//       return "your cat age is 0"
//     }
// });

// Duped for experiment

// grabNumber.addEventListener('click', function convertAge(usersAge) {
//   if (usersAge < 0) {
//     return "your cat age is 0";
//   } else if (usersAge === 1) {
//     return "your cat age is 15";
//   } else if (usersAge === 2) {
//     return "your cat age is 24"
//   } else if (usersAge > 2) {
//     return "your cat age is 28"
//   } else 
//     return "your cat age is 0"
// });

 



 // function below works but maths for numbers above 3 is incorrect, will come back and fix that at a later time. NEED to work out how to add 4 for each year older the user is after 3

// function convertAge(usersAge) {
// if (usersAge < 0) {
//   return "your cat age is 0";
// } else if (usersAge === 1) {
//   return "your cat age is 15";
// } else if (usersAge === 2) {
//   return "your cat age is 24"
// } else if (usersAge > 2) {
//   return "your cat age is 28"
// } else 
//   return "your cat age is 0"
// }
  