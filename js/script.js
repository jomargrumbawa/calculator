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

function renderDisplay(string) {
  if (calcDisplay.textContent === "0") {
    calcDisplay.textContent = string
  } else {
    calcDisplay.textContent += string
  }
}

function setNumber(num) {
  if (!firstNum) {
    firstNum = num
  } else if (firstNum && operator) {
    secondNum = num
  }
}

function setOperator(symbol) {
  operator = symbol
}

numButtons.forEach(function(button) {
  button.addEventListener("click", function(e) {
    renderDisplay(e.target.textContent)
  })
})

operButtons.forEach(function(button) {
  button.addEventListener("click", function(e) {
    setNumber(Number(calcDisplay.textContent))
    setOperator(e.target.textContent)
    calcDisplay.textContent = 0
  })
})

eqlButton.addEventListener("click", function(e) {
  if (!firstNum || !operator) {
    return null
  } else {
    setNumber(Number(calcDisplay.textContent))
    let output = operate(firstNum, secondNum, operator)
    firstNum = output
    secondNum = null
    operator = null
    calcDisplay.textContent = firstNum
  }
})