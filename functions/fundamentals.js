// Takes number and returns number + 7
function add7(num) {
    return num+7
}

// Takes two numbers and returns their product
function multiply(num1, num2) {
    return num1*num2
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1)
}

function lastLetter (str) {
    return str.charAt(str.length-1)
}

// Does the same thing as above using arrow functions
_add7 = num => num+7

_multiply = (num1,num2) => num1*num2

_capitalize = str =>  str.charAt(0).toUpperCase() + str.substring(1)

_lastLetter = str => str.charAt(str.length-1)