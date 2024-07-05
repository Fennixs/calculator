// Get the display element
const display = document.getElementById("display");

// Variable to store the memory value
let memoryValue = 0;

/**
 * Appends the given input to the display value.
 * @param {string} input - The input to append to the display.
 */
function appendToDisplay(input) {
    display.value += input;
}

/**
 * Calculates the result of the expression in the display.
 * If there is an error in the evaluation, it displays "Error".
 */
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

/**
 * Clears the display.
 */
function clearDisplay() {
    display.value = "";
}

/**
 * Adds the current display value to the memory value and updates the display.
 * TODO: Debug why appendToDisplayAdd is not working as expected
 * Possible issues to check:
 * 1. Ensure the button calling this function has the correct onclick attribute.
 * 2. Verify that display.value contains a valid number before parsing.
 * 3. Add pi, % and +/- operations 
 */
function appendToDisplayAdd() {
    // Check if display value is not empty
    if (display.value !== "") {
        // Parse the display value and add it to memoryValue
        memoryValue += parseFloat(display.value);
        // Update the display to show the new memory value
        display.value = memoryValue;
    }
}

