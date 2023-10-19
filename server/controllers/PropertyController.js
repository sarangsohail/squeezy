const Property = require('../model/Property');

const createProperty = async (req, res) => {
  try {
    const newProperty = req.body;
    const propertyId = await Property.create(newProperty);
    res.status(201).json({ propertyId });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'An error occurred while creating the property' });
  }
};

const getProperty = async (req, res) => {
  try {
    const propertyId = req.params.id;
    const property = await Property.findById(propertyId);
    res.status(200).json(property);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'An error occurred while retrieving the property' });
  }
};

const getAllProperties = async (req, res) => {
    try {
      const properties = await Property.findAll();
      res.status(200).json(properties);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'An error occurred while retrieving all properties' });
    }
  };
  

const updateProperty = async (req, res) => {
  try {
    const propertyId = req.params.id;
    const updatedProperty = req.body;
    await Property.updateById(propertyId, updatedProperty);
    res.status(200).json({ message: 'Property updated successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'An error occurred while updating the property' });
  }
};

const deleteProperty = async (req, res) => {
  try {
    const propertyId = req.params.id;
    await Property.deleteById(propertyId);
    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'An error occurred while deleting the property' });
  }
};

module.exports = {
  createProperty,
  getProperty,
  getAllProperties,
  updateProperty,
  deleteProperty
};

