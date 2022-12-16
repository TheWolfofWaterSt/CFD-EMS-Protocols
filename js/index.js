function Login() {
  const enteredPassword = document.getElementById("passwordInput").value;

  if (enteredPassword == "Aspirin") {
    window.location = "src/home.html"
  } else {
    document.getElementById("errorMsg").innerHTML = "*The password you've entered is incorrect*";
  }
}

function enterKeyPressed(event) {
  if (event.keyCode == 13) {
    Login();
  }
}

