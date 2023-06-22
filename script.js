// Basic math functions 
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

//Operator function
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

let testingResult = 'none';

// Display variables 
const displayScreen = document.querySelector('.display-screen');
// Button and operator variables 
const clearButton = document.querySelector('.clear-button');
const deleteButton = document.querySelector('.delete-button');
// const posNegButton = document.querySelector('.pos-neg-button');
const numbers = document.querySelectorAll('.number-button');
const operators = document.querySelectorAll('.operator-button');
const equalsOperator = document.querySelector('.equals');

// Calculator Functionality
// Clear display 
clearButton.addEventListener('click', () => {

    displayScreen.textContent = "";
    aNum = '';
    operatorSymbol = 'none';
    bNum = '';
    console.log(`a = ${aNum}\nop = ${operatorSymbol}\nb = ${bNum}`);
});

// Delete button
deleteButton.addEventListener('click', () => {

    if (operatorSymbol === 'none') {
        aNum = aNum.slice(0,aNum.length - 1);
        displayScreen.innerText = aNum;
    } else {
        bNum = bNum.slice(0,bNum.length - 1);
        displayScreen.innerText = bNum;
    };        
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

    aNum = result;
    operatorSymbol = 'none';
    bNum = '';

    console.log(result)
    displayScreen.innerText = result;

    if (testingResult === 'none' || testingResult === undefined) { //this is just to make sure the things are working correctly
        testingResult = result;                                    // the if condition is not really necessary 
        console.log('testing result is here!!!!')
    };
});





    // // I need to imitate this, make it work with the display
    // let aNum = Number(prompt('insert a number'));
    // let op = prompt('insert a math operator');
    // let bNum = Number(prompt('insert a number'));
    // console.log(operator(aNum,op,bNum));
