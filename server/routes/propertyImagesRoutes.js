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
      cb(null, file.fieldname + '-' + Date.now());
    }
  });
  
  // Create a Multer instance with the storage configuration
  const upload = multer({ storage: storage });
  
  // Route for creating a property image
router.post('/:propertyId', upload.single('image'), PropertyImageController.createPropertyImage);
  
// Route for getting property images
router.get('/:propertyId', PropertyImageController.getPropertyImages);

// Route for deleting a property image
router.delete('/:imageId', PropertyImageController.deletePropertyImage);


module.exports = router;