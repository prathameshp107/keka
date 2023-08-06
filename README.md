
# Node.js MVC Application

This is a simple Node.js application built using the Model-View-Controller (MVC) architecture. It includes user authentication, file upload functionality, and displays parsed data from uploaded files.

## Features

- User authentication using sessions
- Registration and login pages
- Upload XLSX file with parsing
- Display parsed data from uploaded file

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/your-nodejs-app.git
   ```

2. Install the dependencies:

   ```
   cd your-nodejs-app
   npm install
   ```

3. Start the server:

   ```
   npm start
   ```

   The application will be accessible at http://localhost:3000.

## Usage

1. Register a new account or log in using the provided forms.

2. After logging in, you can access the file upload page.

3. Upload an XLSX file by clicking the "Browse..." button, select the file, and click "Upload."

4. The uploaded file will be parsed, and the parsed data will be displayed.

## Technologies Used

- Node.js
- Express.js
- Express-Session
- Express-Fileupload
- xlsx (SheetJS)
