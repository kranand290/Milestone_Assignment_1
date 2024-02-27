let enteredPassword = prompt("Enter Password!!");
console.log(enteredPassword);

let confirmPassword = prompt("Please Confirm Your Password");

if (enteredPassword === confirmPassword) {
  console.log("Password Matched. Password validation Successful.");
} else {
  console.log("Password didn't match. Password validation unsuccessful");
}
