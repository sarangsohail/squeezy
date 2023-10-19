const dbPromise = require('../db');

class PropertyImage {
  static async create(propertyImage) {
    const query = `
      INSERT INTO PropertyImages (PropertyID, ImageURL)
      VALUES (?, ?)
    `;
    const values = [
      propertyImage.PropertyID,
      propertyImage.ImageURL
    ];

    try {
      const [result] = await db.query(query, values);
      return result.insertId;
    } catch (error) {
      console.log(error);
      throw new Error('Error creating property image');
    }
  }

  static async findByPropertyId(propertyId) {
    const query = `
      SELECT * FROM PropertyImages WHERE PropertyID = ?
    `;
    const values = [propertyId];

    try {
      const [rows] = await db.query(query, values);
      return rows;
    } catch (error) {
      console.log(error);
      throw new Error('Error retrieving property images');
    }
  }

  static async deleteById(imageId) {
    const query = `
      DELETE FROM PropertyImages WHERE ID = ?
    `;
    const values = [imageId];

    try {
      const [result] = await db.query(query, values);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error deleting property image');
    }
  }
}

module.exports = PropertyImage;
