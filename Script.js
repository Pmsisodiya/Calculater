let currentOperand = '';
let previousOperand = '';
let currentOperation = null;

function appendNumber(number) {
	currentOperand = currentOperand.toString() + number.toString();
	updateDisplay();
}

function chooseOperation(operation) {
	if (currentOperation !== null) calculateResult();
	currentOperation = operation;
	previousOperand = currentOperand;
	currentOperand = '';
}

function calculateResult() {
	let result = 0;
	const prev = parseFloat(previousOperand);
	const curr = parseFloat(currentOperand);
	if (currentOperation === '+') result = prev + curr;
	else if (currentOperation === '-') result = prev - curr;
	else if (currentOperation === '*') result = prev * curr;
	else if (currentOperation === '/') result = prev / curr;
	currentOperand = result.toString();
	currentOperation = null;
	previousOperand = '';
	updateDisplay();
}

function updateDisplay() {
	document.getElementById('display').value = currentOperand;
}

function clearDisplay() {
	currentOperand = '';
	previousOperand = '';
	currentOperation = null;
	updateDisplay();
}
