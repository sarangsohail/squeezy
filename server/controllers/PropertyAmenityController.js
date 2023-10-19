const PropertyAmenity = require('../model/PropertyAmenity');
const Amenity = require('../model/Amenity');

class PropertyAmenityController {
  static async createPropertyAmenity(req, res) {
    try {
      const { PropertyID, AmenityID } = req.body;

      // Check if the Amenity exists
      const amenity = await Amenity.findById(AmenityID);
      if (!amenity) {
        return res.status(404).json({ error: 'Amenity not found' });
      }

      const propertyAmenity = {
        PropertyID,
        AmenityID
      };

      const result = await PropertyAmenity.create(propertyAmenity);

      res.status(201).json({ id: result.insertId });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to create property amenity' });
    }
  }

  static async getPropertyAmenitiesByPropertyId(req, res) {
    try {
      const { propertyId } = req.params;

      const propertyAmenities = await PropertyAmenity.findByPropertyId(propertyId);

      res.json(propertyAmenities);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to retrieve property amenities' });
    }
  }

  static async deletePropertyAmenitiesByPropertyId(req, res) {
    try {
      const { propertyId } = req.params;

      await PropertyAmenity.deleteByPropertyId(propertyId);

      res.json({ message: 'Property amenities deleted successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to delete property amenities' });
    }
  }
}

module.exports = PropertyAmenityController;
