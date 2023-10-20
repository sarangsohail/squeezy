const express = require('express');
const router = express.Router();

const PropertyAmenityController = require('../controllers/PropertyAmenityController');

// Routes for Property Amenities
router.post('/property-amenities', PropertyAmenityController.createPropertyAmenity);
router.get('/property-amenities/:propertyId', PropertyAmenityController.getPropertyAmenitiesByPropertyId);
router.delete('/property-amenities/:propertyId', PropertyAmenityController.deletePropertyAmenitiesByPropertyId);


module.exports = router;

