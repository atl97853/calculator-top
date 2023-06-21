// Create functions for basic math operatos
// add, subtract, multiply, divide 

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

// Create operator function 
// takes two numbers, an operator and returns the result 

function operator(numA, operator, numB) {
    switch (operator) {
        case '+':
            return add(numA, numB);
        case '-':
            return subtract(numA, numB);
        case '*':
            return multiply(numA, numB);
        case '/':
            return divide(numA, numB);
    };
};

// Operator variables
let aNum = '';
let bNum = '';
let operatorSymbol = 'none';
let resultNum = 'none';

// Display variables 
const displayScreen = document.querySelector('.display-screen');
// Button and operator variables 
const clearButton = document.querySelector('.clear-button');
const numbers = document.querySelectorAll('.number-button');
const operators = document.querySelectorAll('.operator-button');
const equalsOperator = document.querySelector('.equals');

// Calculator Functionality
// Display buttons 
clearButton.addEventListener('click', () => {

    displayScreen.textContent = "";
    aNum = '';
    operatorSymbol = 'none';
    bNum = '';
    console.log(`a = ${aNum}\nop = ${operatorSymbol}\nb = ${bNum}`);
});

// General numbers 
numbers.forEach(number => {
    number.addEventListener('click', e => {

        const value = e.target.innerText;
        console.log(value);

        if (operatorSymbol === 'none') {
            aNum += value;
            displayScreen.innerText = aNum;
        } else {
            bNum += value;
            displayScreen.innerText = bNum;
        };        
    });
});

// General math operators
operators.forEach(number => {
    number.addEventListener('click', e => {
        
        const value = e.target.innerText;
        operatorSymbol = value;
        console.log(value); // this is just for testing
        displayScreen.innerText = operatorSymbol;
    });
});

// Equals operator 
equalsOperator.addEventListener('click', () => {

    console.log(`a = ${aNum}\nop = ${operatorSymbol}\nb = ${bNum}`);
    const result = operator(Number(aNum),operatorSymbol,Number(bNum));
    console.log(result)
    displayScreen.innerText = result;
});





    // // I need to imitate this, make it work with the display
    // let aNum = Number(prompt('insert a number'));
    // let op = prompt('insert a math operator');
    // let bNum = Number(prompt('insert a number'));
    // console.log(operator(aNum,op,bNum));
