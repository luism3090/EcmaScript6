
// JavaScript let

// The let statement allows you to declare a variable with block scope.


// Redeclaring a variable using var can impose problems:

var x = 10;

console.log(x);

{ 
    var x = 2;

    console.log(x);
}
console.log(x);



console.log("----------------------------------------");

// Redeclaring a variable using let can solve the problems:


var y = 10;

console.log(y);

{
	let y = 20;
	console.log(y);
}

console.log(y);



console.log("----------------------------------------");

// Loop Scope

// Using var in a loop:


var i = 5;

for(var i = 0; i <= 10; i++)
{

}

console.log(i);


// Using let in a loop:

let a = 5;

for(let a = 0; a <= 10 ; a ++)
{

}

console.log(a);



console.log("----------------------------------------");

// Global Variables in HTML

// With JavaScript, the global scope is the JavaScript environment.

// In HTML, the global scope is the window object.

// Global variables defined with the var keyword belong to the window object:


var carName1 = "Volvo";

// code here can use window.carName

console.log(window.carName1);


let carName2 = "Volvo";

// code here can not use window.carName

console.log(window.carName2);

console.log(carName2);





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



if(true)
{
	console.log(car);

	var car = 'Volvo';

	console.log(car);

}

console.log(car);


if(true)
{
	// console.log(car2);  // Not Allowed

	let car2 = 'Tesla';

	console.log(car2);

}

// console.log(car2); // Not Allowed



