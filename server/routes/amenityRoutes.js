const express = require('express');
const router = express.Router();

const AmenityController = require('../controllers/AmenityController');

// Routes for Amenities
router.post('/amenities', AmenityController.createAmenity);
router.put('/amenities/:amenityId', AmenityController.updateAmenityById);
router.delete('/amenities/:amenityId', AmenityController.deleteAmenityById);

module.exports = router;
