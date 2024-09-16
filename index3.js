/*
3.Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the
function using the var keyword and log its value to the console before it is assigned a value to demonstrate
variable hoisting@
*/

function addNumbers(a, b) {
    console.log('Value of x before assignment:', x); // Logs: undefined

    // Declare and initialize the variable
    var x = a + b;

    // Log the value of x after assignment
    console.log('Value of x after assignment:', x); // Logs the sum of a and b
}

// Call the function
addNumbers(5, 3);
