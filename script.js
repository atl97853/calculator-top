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

// Function to display numbers and store variables from user input 
// function displayOperator (numA, operator, numB) {
//     // if (operator === undefined) {
//     //     console.log('ok, it works');
//     // } else {
//     //     console.log('nope');
//     // };
//     console.log(numA, operator , numB);
// };

// Create variables (event listener) for buttons/display 

// Operator variables (for now the init value will be 0, but this is error prone, needs an if statement evalution in the function when it works);
let aNum = '';
let bNum = '';
let operatorSymbol = 'none';

// Display Screen - testing
const displayScreen = document.querySelector('.display-screen');
// innerText
// textContent
// innerHtml

// Display buttons 
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {

    displayScreen.textContent = "";
    aNum = '';
    operatorSymbol = 'none';
    bNum = '';
    console.log(`a = ${aNum}\nop = ${operatorSymbol}\nb = ${bNum}`);
});

// Numbers 
const numbers = document.querySelectorAll('.number-button');
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

// Operators
const operators = document.querySelectorAll('.operator-button');
operators.forEach(number => {
    number.addEventListener('click', e => {
        
        const value = e.target.innerText;
        operatorSymbol = value;
        console.log(value);
        displayScreen.innerText = operatorSymbol;
    });
});

// Equals operator 
const equalsOperator = document.querySelector('.equals');
equalsOperator.addEventListener('click', () => {

    // // I need to imitate this, make it work with the display
    // let aNum = Number(prompt('insert a number'));
    // let op = prompt('insert a math operator');
    // let bNum = Number(prompt('insert a number'));
    // console.log(operator(aNum,op,bNum));

    // console.log(aNum);
    console.log(`a = ${aNum}\nop = ${operatorSymbol}\nb = ${bNum}`);
    result = operator(Number(aNum),operatorSymbol,Number(bNum));
    console.log(result)
    displayScreen.innerText = result;
})
