let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

let operator = prompt("Enter operator (+, -, *, /):");

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    if (num2 !== 0) {
      console.log(num1 / num2);
    } else {
      console.log("Cannot divide by zero!");
    }
    break;
  default:
    console.log("Invalid operator!");
}
