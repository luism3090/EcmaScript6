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


const PI2 = 3.14159265359; // Correct

console.log(PI2);


console.log("----------------------------------------");


// Not Real Constants

// The keyword const is a little misleading.

// It does NOT define a constant value. It defines a constant reference to a value.

// Because of this, we cannot change constant primitive values, but whe can change the properties of constant objects.


// Primitive Values

// If we assign a primitive value to a constant, we cannot change the primitive value:

const PI3 = 3.141592653589793;

console.log(PI3)

// PI3 = 3.14;      // This will give an error

// PI3 = PI3 + 10;   // This will also give an error



console.log("----------------------------------------");

// Constant Objects can Change

// You can change the properties of a constant object:


// you can create a const object:

const auto = {
  type: "Fiat",
  model: "500",
  color: "white"
}
console.log(auto);

// you can change a property:

auto.color = "red";
console.log(auto);

// you can add a property:

auto.owner = "johnson";
console.log(auto);

// But I cannot reassign it:

// var auto = {type:"Volvo", model:"EX60", color:"black"};    // ERROR

// console.log(auto);




console.log("----------------------------------------");

// Constant Arrays can Change

// you can create a constant array:

const cars = ['Saab', 'Volvo', 'BMW'];
console.log(cars);

// I can change an element:

cars[0] = "Toyota";
console.log(cars);

// I can add an element:

cars.push("Tesla");
console.log(cars);

// But you can NOT reassign a constant array:

const cars2 = ["Nissan", "Volvo", "Audi"];
console.log(cars2);

// cars2 = ["Nissan1", "Volvo1", "Audi1"];     // Error




console.log("----------------------------------------");

// Redeclaring

// Redeclaring or reassigning an existing var or let variable to const, in the same scope, or in the same block, is not allowed:


var p = 2; // Allowed
// const p = 2 ;  // Not allowed

console.log(p);

{
  let p = 2; // Allowed
  // const p = 2; // Not allowed

  console.log(p);

}



console.log("----------------------------------------");


// Redeclaring or reassigning an existing const variable, in the same scope, or in the same block, is not allowed:


const f = 6; // Allowed
// const f = 3;       // Not allowed
// f = 3;             // Not allowed
// var f = 3; // Not allowed
// let f = 3; // Not allowed

console.log(f);

{
  const f = 10; // Allowed
  // const f = 3;   // Not allowed
  // f = 3;         // Not allowed
  // var f = 3;     // Not allowed
  // let f = 3;     // Not allowed
  console.log(f);
}



console.log("----------------------------------------");

// Redeclaring a variable with const, in another scope, or in another block, is allowed:


const r = 5;

console.log(r);

{
  const r = 10;
  console.log(r);
}

{
  const r = 20;
  console.log(r);
}

{
  const r = 100;
  console.log(r);
}



console.log("----------------------------------------");

// Hoisting


// Variables defined with var are hoisted to the top. (Js Hoisting)
//
// You can use a var variable before it is declared:


carName = 'Volvo1';

console.log(carName);

var carName;



// Variables defined with const are not hoisted to the top.

// A const variable is cannot be used before it is declared


// autoName = 'Volvo';   // you can not use autoName here

const autoName = 'Volvo2';

console.log(autoName);
