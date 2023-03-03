// IMPORT THE MODULE

import * as calc from './modules/calculator.js';

// COLLECT FIRST NUMBER FROM USER
// COLLECT SECOND NUMBER FROM USER
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER

let num1, num2, operation;
while (true) {
    do {
        num1 = Number(prompt('Enter a first number'));
    } while (isNaN(num1));
    
    do {
        num2 = Number(prompt('Enter a second number'));
    } while (isNaN(num2));

    operation = prompt('Which operation would you like to perform? (add, subtract, multiply, divide)');
    if (operation === 'add' || operation === 'subtract' || operation === 'multiply' || operation === 'divide') {
        break;
    } else {
        alert('You must enter add, subtract, multiply or divide.');
    }
};


// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION

let result;
switch (operation) {
    case 'add':
        result = calc.add(num1, num2);
        break;
    case 'subtract':
        result = calc.subtract(num1, num2);
        break;
    case 'multiply':
        result = calc.multiply(num1, num2);
        break;
    case 'divide':
        result = calc.divide(num1, num2);
}
alert(`The result of the calculation is ${result}.`);
