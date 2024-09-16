/*
1.E@ Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. Call the
function before it is declared to demonstrate hoisting@

*/

// Call the function before its declaration
console.log(addNumbers(5, 3)); // Outputs: 8

// Function declaration
function addNumbers(a, b) {
    return a + b;
}
