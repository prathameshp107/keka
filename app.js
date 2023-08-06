const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const crypto = require('crypto'); // Import the crypto library
const fileUpload = require('express-fileupload');

const port = process.env.PORT || 3000;

// Generate a random secret key
const secretKey = crypto.randomBytes(64).toString('hex');

// Set up session
app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: true
}));

// Set up static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up body parser
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload()); // Use express-fileupload middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




// Require and use the route.js for routing
const route = require('./routes/route');

// Middleware to allow access to specific routes without login
// app.use((req, res, next) => {
//     const allowedRoutes = ['/login', '/register']; // Add any other allowed routes
//     if (allowedRoutes.includes(req.path)) {
//       next(); // Allow access to allowed routes
//     } else {
//       res.redirect('/login'); // Redirect to login page for other routes
//     }
//   });

app.use('/', route);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
