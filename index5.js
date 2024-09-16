/*
5.Declare a variable using let inside a block scope and attempt to log its value to the console before it is
assigned a value to demonstrate the temporal dead zone.

*/

function demonstrateTDZ() {
    console.log('Before block:');
    
    // Attempt to log the variable before its declaration and initialization
    try {
        console.log('letValue before declaration:', letValue); // ReferenceError: Cannot access 'letValue' before initialization
    } catch (error) {
        console.error('Error accessing letValue before initialization:', error.message);
    }

    {
        // Block scope starts here

        // Attempt to log the variable before its initialization
        try {
            console.log('letValue before assignment inside block:', letValue); // ReferenceError: Cannot access 'letValue' before initialization
        } catch (error) {
            console.error('Error accessing letValue before initialization inside block:', error.message);
        }

        // Declare and initialize the variable
        let letValue = 'This is a let variable';

        // Log the variable after initialization
        console.log('letValue after assignment inside block:', letValue); // Logs: This is a let variable
    }

    console.log('After block:');
    
    // Attempt to log the variable after the block
    try {
        console.log('letValue after block:', letValue); // ReferenceError: letValue is not defined
    } catch (error) {
        console.error('Error accessing letValue outside block:', error.message);
    }
}

// Call the function
demonstrateTDZ();
