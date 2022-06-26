// Performs basic arithmetic operations

let firstNumber = parseInt(window.prompt("Enter the first number: "))
let operation = window.prompt("Choose operation to perform (+,-,*,/")
let secondNumber = parseInt(window.prompt("Enter second number: "))

if (operation == "+") {
    const result = firstNumber + secondNumber
    window.alert(`The result of adding both numbers is: ${result}`)
} else if (operation == "-") {
    const result = firstNumber - secondNumber
    window.alert(`The result of subtracting first number from the second number is: ${result}`)
} else if (operation == "*") {
    const result = firstNumber * secondNumber
    window.alert(`The result of multiplying both numbers is: ${result}`)
} else if (operation == "/") {
    const result = firstNumber / secondNumber
    window.alert(`The result of dividing first number from second number is: ${result}`)
} else {
    if (window.confirm("Unknown command given. Please click 'OK' to retry 'Cancel' to ignore.")) {
        window.location = "/"
    }
}
