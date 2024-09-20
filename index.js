// Get the display element
const display = document.getElementById("display");

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

