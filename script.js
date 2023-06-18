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

function operator(numA, numB, operator) {
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

// Create variables (event listener) for buttons/display 

// Display 
const displayScreen = document.querySelector('.display-screen');
// function displayText (text) {
//     displayScreen.textContent = `${text}`
// };

// innerText
// textContent
// innerHtml

// Numbers 
const numbers = document.querySelectorAll('.number-button')
numbers.forEach(number => {
    number.addEventListener('click', e => {
        console.log(e.target.innerText);
        displayScreen.innerText = e.target.innerText;
    });
});

// Operators
const operators = document.querySelectorAll('.operator-button')
operators.forEach(number => {
    number.addEventListener('click', e => {
        console.log(e.target.innerText);
    });
});

