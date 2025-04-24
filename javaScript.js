let firstNumber = "";
let secondNumber = "";
let operatorUsed = "";

const numberButton = document.querySelectorAll("#number-button");
const operatorButton = document.querySelectorAll("#operator-button");
const clearButton = document.querySelector("#clear-button");

const display = document.querySelector("#display");

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return "ERROR"    
  }
  return parseFloat((a / b).toFixed(4));
}

function operate(operator, a, b) {
  a = Number(a)
  b = Number(b)
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      break;
  }
}
function handleNumber() {
  numberButton.forEach((button) => {
    button.addEventListener("click", () => {
      if (display.textContent === "ERROR") {
        display.textContent = button.textContent;
        firstNumber = button.textContent;
        secondNumber = "";
        operatorUsed = "";
        return;
      }

      if (operatorUsed === "") {
        firstNumber += button.textContent;
      } else {
        secondNumber += button.textContent;
      }
      if (display.textContent === "0") {
        display.textContent = button.textContent;
      } else {
        display.textContent += button.textContent;
      }
    });
  });
}
function handleOperator() {
  operatorButton.forEach((button) => {
    button.addEventListener("click", () => {   
      const lastChar = display.textContent.slice(-1);

      if (button.textContent === "=" && operatorUsed === "") {                 
        return
      }
      if (button.textContent === "=") {    
        const calcResult = operate(operatorUsed, firstNumber, secondNumber);
        firstNumber = calcResult;
        secondNumber = 0;
        operatorUsed = "";
        return display.textContent = calcResult;
      }       
      if (isNaN(lastChar)) {
        operatorUsed = button.textContent;
        return (display.textContent = display.textContent.slice(0, -1) + button.textContent);
      }
      operatorUsed = button.textContent;
      display.textContent += button.textContent;           
    });
  });
}
function clearDisplay() {
  clearButton.addEventListener("click", () => {
    display.textContent = "0";
    firstNumber = 0;
    secondNumber = 0;
    operatorUsed = ""
  });
}

handleNumber();
handleOperator();
clearDisplay();

