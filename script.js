const add = function(x,y) {
  result = x + y
  console.log(result)
}

const subtract = function(x,y) {
  result = x - y
  console.log(result)
    
}

const multiply = function(x,y) {
  result = x * y
  console.log(result)
}

const divide = function(x,y) {
  result = x / y
  console.log(result)
}

const operate = function(x,y,operator) {
    if (operator === "+") {
        add(x,y)
    } else if (operator === "-") {
        subtract(x,y)
    } else if (operator === "*") {
        multiply(x,y)
    } else if (operator === "/") {
        divide(x,y)
    } return 
}

let numbersClicked = [];
let firstNumbers = [];
let secondNumbers = [];
let result = 0;



plus.addEventListener('click', () => {
  innerScreen.textContent += "+"
  firstNumbers.push(numbersClicked)
  firstNumbers.push("+")
})

minus.addEventListener('click', () => {
  innerScreen.textContent += "-"
  firstNumbers.push(numbersClicked)
  firstNumbers.push("-")
})

division.addEventListener('click', () => {
  innerScreen.textContent += "/"
  firstNumbers.push(numbersClicked)
  firstNumbers.push("/")
})

multi.addEventListener('click', () => {
  innerScreen.textContent += "x"
  firstNumbers.push(numbersClicked)
  firstNumbers.push("*")
})

equals.addEventListener('click', () => {
  innerScreen.textContent += "="
  secondNumbers.push(parseInt(numbersClicked))
  operate(parseInt(firstNumbers[0]), parseInt(numbersClicked.slice(firstNumbers[0].length)), firstNumbers[1])
  innerScreen.textContent = result
  firstNumbers = []
  secondNumbers = []
  numbersClicked = result.toString()
})

one.addEventListener('click', () => {
  innerScreen.textContent += "1"
  numbersClicked += 1
  console.log(numbersClicked)
})

two.addEventListener('click', () => {
  innerScreen.textContent += "2"
  numbersClicked += 2
  console.log(numbersClicked)
})

three.addEventListener('click', () => {
  innerScreen.textContent += "3"
  numbersClicked += 3
  console.log(numbersClicked)
})

four.addEventListener('click', () => {
  innerScreen.textContent += "4"
  numbersClicked += 4
  console.log(numbersClicked)
})

five.addEventListener('click', () => {
  innerScreen.textContent += "5"
  numbersClicked += 5
  console.log(numbersClicked)
})

six.addEventListener('click', () => {
  innerScreen.textContent += "6"
  numbersClicked += 6
  console.log(numbersClicked)
})

seven.addEventListener('click', () => {
  innerScreen.textContent += "7"
  numbersClicked += 7
  console.log(numbersClicked)
})

eight.addEventListener('click', () => {
  innerScreen.textContent += "8"
  numbersClicked += 8
  console.log(numbersClicked)
})

nine.addEventListener('click', () => {
  innerScreen.textContent += "9"
  numbersClicked += 9
  console.log(numbersClicked)
})

zero.addEventListener('click', () => {
  innerScreen.textContent += "0"
  numbersClicked += 0
  console.log(numbersClicked)
})

clear.addEventListener('click', () => {
  clearScreen()
})

let clearScreen = function () {
  innerScreen.textContent = ""
   numbersClicked = [];
   firstNumbers = [];
   secondNumbers = []
}


