const express = require('express');
const router = express.Router();

const PropertyAmenityController = require('../controllers/PropertyAmenityController');

// Routes for Property Amenities
router.post('/', PropertyAmenityController.createPropertyAmenity);
router.get('/:propertyId', PropertyAmenityController.getPropertyAmenitiesByPropertyId);
router.delete('/:propertyId', PropertyAmenityController.deletePropertyAmenitiesByPropertyId);


module.exports = router;

