// controllers/authController.js
const db = require('../db');
const Swal = require('sweetalert2');


const authController = {
  login: (req, res) => {
    // Handle login logic using SQLite queries
    // Example: Check user credentials and redirect
    const username = req.body.username;
    const password = req.body.password;

    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
      if (err) {
        throw err;
      }
      if (row) {
        // Successful login logic
        req.session.user = username; // Set session variable for successful login
        res.redirect('/upload');     // Redirect to upload page
      } else {
        // Invalid login logic
        const errorMessage = 'you dont have any account Please register to login';
        const popupScript = `
           <script>
             alert('${errorMessage}');
             window.location.href = '/register'; // Redirect to the registration page
           </script>
         `;
        res.send(popupScript);
      }
    });
  },
  register: (req, res) => {
    // Handle registration logic using SQLite queries
    // Example: Insert new user into the database
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db.run('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password], function (err) {
      if (err) {
        throw err;
      }
      // Registration successful logic
      res.send('Registered successfully');
    });
  }
};

module.exports = authController;
