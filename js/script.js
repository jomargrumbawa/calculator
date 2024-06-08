const numButtons = document.querySelectorAll(".num--button")
const eqlButton = document.querySelector(".eql--button")
const clrButton = document.querySelector(".clr--button")
const operButtons = document.querySelectorAll(".oper--button")
const calcDisplay = document.querySelector(".calc--display")
let firstNum;
let secondNum;
let operator;
let display;

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function operate(firstNum, secondNum, operator) {
  if (operator === "+") {
    return add(firstNum, secondNum)
  } else if (operator === "-") {
    return subtract(firstNum, secondNum) 
  } else if (operator === "*") {
    return multiply(firstNum, secondNum)
  } else if (operator === "/") {
    return divide(firstNum , secondNum)
  }
}

numButtons.forEach(function(button) {
  button.addEventListener("click", function(e) {
    if (calcDisplay.textContent === "0") {
      calcDisplay.textContent = e.target.textContent
    } else {
      calcDisplay.textContent += e.target.textContent
    }
  })
})

operButtons.forEach(function(button) {
  button.addEventListener("click", function(e) {
    if (!firstNum) {
      firstNum = Number(calcDisplay.textContent)
    }
    calcDisplay.textContent = 0
    operator = e.target.textContent
  })
})

clrButton.addEventListener("click", function() {
  calcDisplay.textContent = 0
})

eqlButton.addEventListener("click", function() {
  secondNum = Number(calcDisplay.textContent)
  firstNum = operate(firstNum, secondNum, operator)
  secondNum = null;
  operator = null;
  calcDisplay.textContent = firstNum
  console.log(firstNum, secondNum, operator)
})
