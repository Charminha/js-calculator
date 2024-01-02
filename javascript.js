const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

let array = [];
const sum = function (array) {
    return array.reduce((total, a) => (total + a), 0);
};

const multiply = function (array) {
    return array.reduce((total, a) => (total * a), 1);
};

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


// get parameter input for operations functions from number buttons

// each number button returns its value
const numberButtons = document.querySelectorAll('.number')
numberButtons.forEach(function (currentBtn) {
    currentBtn.addEventListener('click', () => {
        console.log(Number(currentBtn.textContent));
        return Number(currentBtn.textContent);
    });
});