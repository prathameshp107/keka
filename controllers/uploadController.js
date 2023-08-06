// controllers/uploadController.js
const xlsx = require('xlsx');

module.exports = {
  handleUpload: (req, res) => {
    // if (!req.session.user) {
    //   return res.redirect('/login');
    // }

    if (!req.files || !req.files.upload) {
      return res.status(400).json({ error: 'Please select the file.' });
    }

    const file = req.files.upload;

    if (!file) {
      return res.status(400).send('No file uploaded.');
    }

    const workbook = xlsx.read(file.data, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);

    console.log(data);

    // res.render('display-data', { data }); 
    res.status(200).json({ data });
    // res.send('File uploaded and parsed successfully.');
  }
};
