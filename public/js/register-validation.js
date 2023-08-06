document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.querySelector(".register-form");
  
    registerForm.addEventListener("submit", function(event) {
      const username = registerForm.querySelector("[name=username]").value;
      const email = registerForm.querySelector("[name=email]").value;
      const password = registerForm.querySelector("[name=password]").value;
      const confirmPassword = registerForm.querySelector("[name=confirm_password]").value;
  
      if (!username || !email || !password || !confirmPassword) {
        event.preventDefault();
        alert("Please fill in all fields.");
      } else if (username.length < 4) {
        event.preventDefault();
        alert("Username must be at least 4 characters.");
      } else if (!validateEmail(email)) {
        event.preventDefault();
        alert("Invalid email address.");
      } else if (password.length < 6) {
        event.preventDefault();
        alert("Password must be at least 6 characters.");
      } else if (password !== confirmPassword) {
        event.preventDefault();
        alert("Passwords do not match.");
      }
    });
  
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  