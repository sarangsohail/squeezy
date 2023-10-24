const express = require('express');
const router = express.Router();
const multer = require('multer');
const PropertyImageController = require('../controllers/PropertyImagesController');

// Create a Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../frontend/public/property_images');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.png');

    }
  });
  
  // Create a Multer instance with the storage configuration
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1000000 // Limit the file size to 1MB
    },
    fileFilter(req, file, cb) {
      // Validate the file type using a regular expression
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return cb(new Error('Please upload a valid image file'));
      }
      cb(undefined, true);
    }
  });  

  
  // Route for creating a property image
router.post('/:propertyId', upload.single('image'), PropertyImageController.createPropertyImage);
  
// Route for getting property images
router.get('/:propertyId', PropertyImageController.getPropertyImages);

// Route for deleting a property image
router.delete('/:imageId', PropertyImageController.deletePropertyImage);


module.exports = router;

