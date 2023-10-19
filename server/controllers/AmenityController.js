const Amenity = require('../model/Amenity');

class AmenityController {
  static async createAmenity(req, res) {
    try {
      const { Name } = req.body;

      const amenity = {
        Name
      };

      const result = await Amenity.create(amenity);

      res.status(201).json({ id: result.insertId });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to create amenity' });
    }
  }

  static async updateAmenityById(req, res) {
    try {
      const { amenityId } = req.params;
      const updateAmenity = req.body;

      const result = await Amenity.updateById(amenityId, updateAmenity);

      if (!result) {
        return res.status(404).json({ error: 'Amenity not found' });
      }

      res.json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to update amenity' });
    }
  }

  static async deleteAmenityById(req, res) {
    try {
      const { amenityId } = req.params;

      const result = await Amenity.deleteById(amenityId);

      if (!result) {
        return res.status(404).json({ error: 'Amenity not found' });
      }

      res.json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to delete amenity' });
    }
  }
}

module.exports = AmenityController;
