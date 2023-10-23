// const express = require('express');
// const app = express();
// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '/uploads');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now());
//   }
// });

// const upload = multer({ storage: storage });

// app.post('/', upload.single('avatar'), function (req, res, next) {
//   // The file has already been uploaded and processed by Multer
//   // You can access it using req.file
//   // Handle the file or perform any necessary operations here
//   res.json({ success: true, message: 'Photo was updated!' });
// });

// // ... other routes and middleware

// app.listen(3000, function () {
//   console.log('Server is running on port 3000');
// });
