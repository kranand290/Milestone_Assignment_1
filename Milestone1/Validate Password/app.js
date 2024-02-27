function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var message = document.getElementById("message");

  if (email.includes("@") && password.length >= 8) {
    message.textContent = "Valid email and password!";
    message.style.color = "green";
  } else {
    message.textContent = "Invalid email or password!";
    message.style.color = "red";
  }
}


