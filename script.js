// Three variables for each part of a calculator operation
let operandA = '';
let operandB = '';
let operator = '';

function operate(operator, numA, numB){
	let result = 0;

	switch(operator){
	case "+":
		result = add(numA, numB);
		break;
	case "-":
		result = subtract(numA, numB);
		break;
	case "*":
		result = multiply(numA, numB);
		break;
	case "/":
		result = divide(numA, numB);
		break;
	}

	return result;
}

// functions for basic math operators
function add(a, b){
	return a + b;
}

function subtract(a, b){
	return a - b;
}

function multiply(a, b){
	return a * b;
}

function divide(a, b){
	return a / b;
}

const digitBtns = document.querySelectorAll('.digit');
const display = document.querySelector('.display');

// Add a 'click' event listener to each of the digit buttons
digitBtns.forEach( (button) => button.addEventListener('click', (event) => {
	const text = event.target.textContent;
	displayTextContent(display, text);
	operandA = createOperand(operandA, text);
}));


// make a function that displays the text content of each button
function displayTextContent(display, text){
	display.textContent += text;
}

