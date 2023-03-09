// ADD A PRIVATE FUNCTION CALLED CALCULATE

const calculate = (x, y, operation) => {
    switch (operation) {
        case 'add':
            return x + y;
        case 'subtract':
            return x - y;
        case 'multiply':
            return x * y;
        case 'divide':
            return x / y;
    }
}

// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION

const add = (x, y) => calculate(x, y, 'add');

// SUBTRACT FUNCTION

const subtract = (x, y) => calculate(x, y, 'subtract');

// MULTIPLY FUNCTION

const multiply = (x, y) => calculate(x, y, 'multiply');

// DIVIDE FUNCTION

const divide = (x, y) => calculate(x, y, 'divide');

// EXPORT THE FOUR PUBLIC FUNCTIONS

export {add, subtract, multiply, divide};
