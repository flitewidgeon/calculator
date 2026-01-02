// Three variables for each part of a calculator operation
let operandA;
let operandB;
let operator;

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