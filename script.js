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
const operators = document.querySelector('.operators');
const clearBtn = document.querySelector('.clear');
const decimalBtn = document.querySelector('.decimal');

const buffer = [];

// Add a 'click' event listener to each of the digit buttons
digitBtns.forEach( (button) => button.addEventListener('click', (event) => {


	// clear the display if there are no items in the buffer(the buffer is cleared when an operator btn is pressed)
	if (buffer.length < 1){
		decimalBtn.disabled = false;
		display.textContent = '';
	}
	const text = event.target.textContent;

	// if the textcontent of the button pressed is '.' and the display text content
	// already contains a '.' then don't add it to the display and disable the decimal button
	if (text === '.' && display.textContent.includes('.')){
		decimalBtn.disabled = true;
	}
	else{
	displayTextContent(display, text);
	// add the character to the buffer
	buffer.push(text);
	}

}));

operators.addEventListener('click', (event) => {
	// When an operator is clicked, if the buffer has a number, store the number 
	// the number becomes the first operand if it is not there, otherwise the second operand
	if (buffer.length > 0){
		let number = buffer.join('');
		if (!operandA){
			operandA =  number;
		}
		else{
			// don't let user divide by 0: display message, and do not assign 0 to operandB
			// also clear operandA and operator and the buffer, so user has to start again
			if (operator === '/' && number === '0'){
				display.textContent = 'DIVISION BY ZERO!';
				clearData();
			}
			else{
				operandB = number;
			}
		}
		// clear the buffer, after assigning contents to a variable
		buffer.length = 0;
	}

		// check whether a calculation can be performed
	if (operandA && operandB && operator){
		let result = operate(operator, +operandA, +operandB);
		// if the length of the result is longer than 8(including - and .) round for display
		result = result.toString().length > 8? result.toFixed(8): result;
		display.textContent = result;

		// the result becomes the first operand of the next operation, and operandB is made available for a new number
		operandA = result;
		operandB = '';
	}

	// assign the clicked operator to the operator variable
	operator = event.target.textContent;

})


// make a function that displays the text content of each button
function displayTextContent(display, text){
	display.textContent += text;
}

function clearData(){
	operandA = '';
	operandB = '';
	operator = '';
	buffer.length = 0;
}

// clear function - clear all data and display
function clear(){
	clearData();
	display.textContent = '';
}

clearBtn.addEventListener('click', clear);



