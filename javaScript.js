/**
 * calculator 

- add
- subtract
- multiply
- divide

For example, 3 + 5. Create three variables, one for each part of the operation. You’ll use these variables to update your display later.

Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.

Create a basic HTML calculator with buttons for each digit and operator (including =).
There should also be a display for the calculator
Add a “clear” button.

Create the functions that populate the display when you click the digit buttons. 
You should store the content of the display (the number) in a variable for use in the next step

You’ll need to store the first and second numbers input by the user and then operate() on them when the user presses the = button,
according to the operator that was selected between the numbers.
You should already have the code that can populate the display, so once operate has been called, update the display with the result of the operation.
You need to figure out how to store all the values and call the operate function with them.
 */

let firstNumber = 0;
let secondNumber = 0;
let operation;

const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function operate(firstNumber, secondNumber, operation) {
  if (operation === "+") {
    return add(firstNumber, secondNumber);
  }
  if (operation === "-") {
    return subtract(firstNumber, secondNumber);
  }
  if (operation === "*") {
    return multiply(firstNumber, secondNumber);
  }
  if (operation === "/") {
    return devide(firstNumber, secondNumber);
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "clear") {
      return (display.textContent = "0");
    }
    if (display.innerHTML == "0" && !isNaN(button.id)) {
      return (display.textContent = button.id);
    } else if (isNaN(display.textContent.slice(-1)) && isNaN(button.id)) {
      return (display.textContent = display.textContent.slice(0, -1) + button.id);
    } else {
      display.textContent += button.id;
    }
  });
});
