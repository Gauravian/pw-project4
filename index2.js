/*
2.Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product.
Use function expressions to define the function and call the function before it is declared to demonstrate
hoisting@

*/

// Attempt to call the function before its declaration
try {
    console.log(multiplyNumbers(5, 3)); // This will throw an error
} catch (error) {
    console.error('Error:', error.message);
}

// Function expression
const multiplyNumbers = function(a, b) {
    return a * b;
};

