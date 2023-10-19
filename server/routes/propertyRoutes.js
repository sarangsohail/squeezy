const express = require('express');
const router = express.Router();

const {
  createProperty,
  getProperty,
  getAllProperties,
  updateProperty,
  deleteProperty
} = require('../controllers/PropertyController.js');

router.get('/', getAllProperties);
router.post('/', createProperty); 
router.get('/:id', getProperty); 
router.put('/:id', updateProperty); 
router.delete('/:id', deleteProperty); 


module.exports = router;
