// Default Parameter Values

// ES6 allows function parameters to have default values.

function sumatoria(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y
}

var result = sumatoria(5); // will return 15

console.log(result);
