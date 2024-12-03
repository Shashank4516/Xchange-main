document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var usernameElement = document.querySelector(".username");
    usernameElement.textContent = "Welcome, " + username;
  });
