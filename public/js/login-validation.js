document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login-form");
  
    loginForm.addEventListener("submit", function(event) {
      const username = loginForm.querySelector("[name=username]").value;
      const password = loginForm.querySelector("[name=password]").value;
  
      if (!username || !password) {
        event.preventDefault();
        alert("Please fill in all fields.");
      } else if (username.length < 4) {
        event.preventDefault();
        alert("Username must be at least 4 characters.");
      } else if (password.length < 6) {
        event.preventDefault();
        alert("Password must be at least 6 characters.");
      }
    });
  });
  