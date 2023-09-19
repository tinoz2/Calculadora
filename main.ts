let currentInput: string = '';
let result: string = '';
let displayPort = document.getElementById('display') as HTMLInputElement;


function appendToDisplay(value: string) {
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
    } catch (error) {
        displayPort.value = 'Error';
        currentInput = '';
        result = '';
    }
}
