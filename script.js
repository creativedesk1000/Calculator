// Function to append values to the input field
function appendToInput(value) {
    const inputField = document.getElementById("myNumber");
    // If input is empty, do not allow leading zeros
    if (inputField.value === "0" && value !== '.' && value !== '%') {
        inputField.value = value;
    } else {
        inputField.value += value;
    }
}

// Function to clear the input field
function clearInput() {
    document.getElementById("myNumber").value = '0';
}

// Function to delete the last character from the input field
function deleteLast() {
    const inputField = document.getElementById("myNumber");
    inputField.value = inputField.value.slice(0, -1);
    if (inputField.value === '') {
        inputField.value = '0'; // Reset to zero if input is empty
    }
}

// Function to calculate the result
function calculate() {
    const inputField = document.getElementById("myNumber");
    try {
        // Replace 'X' with '*' for multiplication and evaluate
        inputField.value = eval(inputField.value.replace('X', '*'));
    } catch (error) {
        inputField.value = 'Error'; // Display error if eval fails
    }
}

// Function to handle the addition operation
function add() {
    const inputField = document.getElementById("myNumber");
    inputField.value += '+';
}

// Keyboard input handling
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if ('0123456789+-*/.%'.includes(key)) {
        appendToInput(key);
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearInput();
    }
});
