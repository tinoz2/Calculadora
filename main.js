"use strict";
let currentInput = '';
let result = '';
let displayPort = document.getElementById('display');
function appendToDisplay(value) {
    currentInput += value;
    displayPort.value = currentInput;
}
function clearDisplay() {
    currentInput = '';
    result = '';
    displayPort.value = '';
}
function calculateResult() {
    try {
        result = eval(currentInput);
        displayPort.value = result;
        currentInput = result.toString();
    }
    catch (error) {
        displayPort.value = 'Error';
        currentInput = '';
        result = '';
    }
}
