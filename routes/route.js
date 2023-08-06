const express = require('express');
const router = express.Router();
const path = require('path');


// Require the authController
const authController = require('../controllers/authController');
const uploadController = require('../controllers/uploadController');


// Serve login.html directly
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
});

router.get('/', (req, res) => {
  res.redirect('/login');
});


// Serve register.html directly
router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'register.html'));
});

// router.get('/upload', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'views', 'upload.html'));
// });

// Handle login and register POST requests using the authController
router.post('/login', authController.login);
router.post('/register', authController.register);

// Serve upload.html only if user is logged in
router.get('/upload', (req, res) => {
  if (req.session.user) {
    res.sendFile(path.join(__dirname, '..', 'views', 'upload.html'));
  } else {
    res.redirect('/login'); // Redirect to login if user is not logged in
  }
});

// Add a route for the parsed data page
router.get('/display-data', (req, res) => {
  res.render('display-data');
});

router.post('/upload', uploadController.handleUpload);

module.exports = router;
