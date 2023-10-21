const express = require('express');
const router = express.Router();

const AmenityController = require('../controllers/AmenityController');

// Routes for Amenities
router.post('/', AmenityController.createAmenity);
router.put('/:amenityId', AmenityController.updateAmenityById);
router.delete('/:amenityId', AmenityController.deleteAmenityById);
router.get('/', AmenityController.getAllAmenities);

module.exports = router;
