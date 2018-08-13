// JavaScript let

// ES2015 introduced two important new JavaScript keywords: let and const.

// These two keywords provide Block Scope variables (and constants) in JavaScript.

// Before ES2015, JavaScript had only two types of scope: Global Scope and Function Scope.


// Global Scope

// Variables declared Globally (outside any function) have Global Scope.


var autoName = 'Volvo';

console.log(autoName); // code here can use carName


function myFunction() {
  console.log(autoName); // code here can also use carName
};
myFunction();

// Global variables can be accessed from anywhere in a JavaScript program.



console.log("----------------------------------------");

// Function Scope

// Variables declared Locally (inside a function) have Function Scope.

// console.log(autoName2); // code here can NOT use autoName2

function myFunction2() {
  var autoName2 = 'Volvoin';
  console.log(autoName2); // code here CAN use carName
}
myFunction2();

// console.log(autoName2);	  // code here can NOT use carName


// Local variables can only be accessed from inside the function where they are declared.



console.log("----------------------------------------");

// JavaScript Block Scope

// Variables declared with the var keyword can not have Block Scope.

// Variables declared inside a block {} can be accessed from outside the block.

{
  var e = 50;

  console.log(e);
}

console.log(e); // x CAN be used here

// Before ES2015 JavaScript did not have Block Scope.

// Variables declared with the let keyword can have Block Scope.

// Variables declared inside a block {} can not be accessed from outside the block:


{
  let j = 10;
  console.log(j);
}

// console.log(j); // j can NOT be used here




console.log("----------------------------------------");

// Redeclaring Variables

// Redeclaring a variable using the var keyword can impose problems.

// Redeclaring a variable inside a block will also redeclare the variable outside the block:

var x = 10;

console.log(x);

{
  var x = 20;

  console.log(x);
}
console.log(x);



console.log("----------------------------------------");

// Redeclaring a variable using the let keyword can solve this problem.

// Redeclaring a variable inside a block will not redeclare the variable outside the block:


var y = 10;

console.log(y);

{
  let y = 2;
  console.log(y);

  y = 18;
  console.log(y);
}

console.log(y);



console.log("----------------------------------------");

// Loop Scope

// Using var in a loop:


var i = 5;

for (var i = 0; i <= 10; i++) {

}

console.log(i);



// Using let in a loop:

let a = 5;

for (let a = 0; a <= 10; a++) {

}

console.log(a);

// In the first example, using var, the variable declared in the loop redeclares the variable outside the loop.

// In the second example, using let, the variable declared in the loop does not redeclare the variable outside the loop.

// When let is used to declare the i variable in a loop, the i variable will only be visible within the loop.



console.log("----------------------------------------");

// Function Scope

// Variables declared with var and let are quite similar when declared inside a function.

// They will both have Function Scope:

function myFunctionn1() {
  var carNamee = "Volvo"; // Function Scope

  console.log(carNamee);
}
myFunctionn1();

function myFunctionn2() {
  let carNamee = "Volvo"; // Function Scope
  console.log(carNamee);
}
myFunctionn2();


console.log("----------------------------------------");

// Global Scope

// Variables declared with var and let are quite similar when declared outside a block.

// They will both have Global Scope:

var k = 40; // Global scope

let u = 50; // Global scope

console.log(k);
console.log(k);



console.log("----------------------------------------");

// Global Variables in HTML

// With JavaScript, the global scope is the JavaScript environment.

// In HTML, the global scope is the window object.

// Global variables defined with the var keyword belong to the window object:


var carName1 = "BMW";

console.log(window.carName1); // code here can use window.carName

console.log(carName1); // code here can use carName1


let carName2 = "Ford";

console.log(window.carName2); // code here can not use window.carName2

console.log(carName2); // code here can use carName2



console.log("----------------------------------------");

// Redeclaring

// Redeclaring a JavaScript variable with var is allowed anywhere in a program:


var q = 2;

console.log(q);

var q = 3;

console.log(q);


// Redeclaring a variable with let, in the same scope, or in the same block, is not allowed:


let v = 20; // Allowed

console.log(v);

// let v = 3; // Not Allowed

{
  let v = 24; // Allowed

  console.log(v);

  // let v = 5; // Not Allowed
}





console.log("----------------------------------------");

// Hoisting

// Variables defined with var are hoisted to the top. (Js Hoisting)

// You can use a variable before it is declared:

if (true) {

  console.log(car);

  var car = 'Volvo';

  console.log(car);

}

console.log(car);


if (true) {

  // console.log(car2);  // Not Allowed

  let car2 = 'Tesla';

  console.log(car2);

  function carro() {
    console.log(car2);
  }
  carro();

}

// console.log(car2); // Not Allowed
