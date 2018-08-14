// JavaScript Array find() Method

// Get the value of the first element in the array that has a value of 18 or more:


// Definition and Usage

// The find() method returns the value of the first element in an array that pass a test (provided as a function).
//
// The find() method executes the function once for each element present in the array:
//
// If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
// Otherwise it returns undefined
// Note: find() does not execute the function for empty arrays.
//
// Note: find() does not change the original array.


var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 9;
}

let age = ages.find(checkAdult);

console.log(age);









//
