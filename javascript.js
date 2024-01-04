const add = function (a, b) {
    console.log(a + b);
    return a + b;
};

const subtract = function (a, b) {
    console.log(a - b);
    return a - b;
};

let array = [];
const sum = function (array) {
    let res = array.reduce((total, a) => (total + a), 0);
    console.log(res);
    return res;
};

const multiply = function (a, b) {
    console.log(a * b);
    return a * b;
};

const divide = function (a, b) {
    console.log(a / b);
    return a / b;
}

const power = function (base, exponent) {
    let res = base;
    for (let i = 0; i < exponent - 1; i++) {
        res *= base;
    }
    return res;
};

const factorial = function (a) {
    let res = 1;
    for (let i = a + 1; i > 1; i--) {
        res *= i - 1;
    }
    return res;
};


let operand1;
let operand2;
let operator;

const operate = function (operand1, operand2, operator) {
    if (operator === "+") {
        add(operand1, operand2);
    }
    else if (operator === "-") {
        subtract(operand1, operand2);
    }
    else if (operator === "*") {
        multiply(operand1, operand2);
    }
    else if (operator === "/") {
        divide(operand1, operand2);
    }
};

// show value of current button on display

let displayValue;
const calculatorDisplay = document.querySelector('.calculator-display');


// const updateDisplay = function(displayValue){

//     calculatorDisplay.textContent = displayValue;

// };




// get parameter input for operations functions from number buttons

// each number button returns its value
const numberButtons = document.querySelectorAll('.number')
numberButtons.forEach(function (currentBtn) {
    currentBtn.addEventListener('click', () => {
        displayValue = Number(currentBtn.textContent);
        console.log("display value " + displayValue);
        calculatorDisplay.textContent = String(displayValue);

        console.log(Number(currentBtn.textContent));
        return Number(currentBtn.textContent);
    });
});

// each operations button returns its value
const operationsButtons = document.querySelectorAll('.operation')
operationsButtons.forEach(function (currentBtn) {
    currentBtn.addEventListener('click', () => {
        displayValue = currentBtn.textContent;
        console.log("display value " + displayValue);
        calculatorDisplay.textContent = String(displayValue);
        console.log(currentBtn.textContent);
        return currentBtn.textContent;
    });
});


// testing area
operand1 = 30;
operand2 = 5;
operator = "*";
operate(operand1, operand2, operator);