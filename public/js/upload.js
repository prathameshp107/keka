// upload.js
const fileInput = document.querySelector('input[type="file"]');
const browseButton = document.querySelector('.btn-browse');
const fileNameDisplay = document.getElementById('file-name');
const uploadForm = document.querySelector('#upload-form');

fileInput.addEventListener('change', () => {
  if (fileInput.files.length > 0) {
    fileNameDisplay.textContent = `Selected File: ${fileInput.files[0].name}`;
  } else {
    fileNameDisplay.textContent = '';
  }
});

browseButton.addEventListener('click', () => {
  fileInput.click(); // Trigger file input click event
});
