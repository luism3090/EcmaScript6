
// JavaScript const

// Variables defined with const behave like let variables, except they cannot be reassigned:

const PI = 3.141592653589793;

console.log(PI);

// PI = 3.14; // this will give an error

// PI = PI + 10  // this will also give an error



console.log("----------------------------------------");

// Block Scope 

// Declaring a variable with const is similar to let when it comes to Block Scope.

// The x declared in the block, in this example, is not the same as the x declared outside the block:

var x = 10;

console.log(x);

{
	const x = 2;

	console.log(x);

}

console.log(x);





console.log("----------------------------------------");

// Assigned when Declared


// JavaScript const variables must be assigned a value when they are declared:


// const PI2;                   // incorrect

// PI2 = 3.14159265359;

//console.log(PI2);


const PI2 = 3.14159265359;

console.log(PI2);


console.log("----------------------------------------");


// Not Real Constants

// The keyword const is a little misleading.

// It does NOT define a constant value. It defines a constant reference to a value.

// Because of this, we cannot change constant primitive values, but whe can change the properties of constant objects.

// Primitive Values

// If we assign a primitive value to a constant, we cannot change the primitive value: 



console.log("----------------------------------------");

// Constant Objects

// Declaring a constant object does NOT make the objects properties unchangeable:

// I can create a const object:

const auto = {type:"Fiat", model:"500", color:"white" }
console.log(auto);

// I can change a property:

auto.color = "red";
console.log(auto);

// I can add a property:

auto.owner = "johnson";
console.log(auto);

// But I cannot reassign it:

// var auto = {type:"Volvo", model:"EX60", color:"black"};    // ERROR

// console.log(auto);




console.log("----------------------------------------");

// Constant Arrays

// Declaring a constant array does NOT make the array elements unchangeble:

// I can create a constant array:

const cars = ['Saab','Volvo','BMW'];
console.log(cars);

// I can change an element:

cars[0] = "Toyota";
console.log(cars);

// I can add an element:

cars.push("Tesla");
console.log(cars);

// But I cannot reassign it:

// var cars = ["Toyota", "Volvo", "Audi"];    //ERROR









