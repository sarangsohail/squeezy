const { db } = require('/Users/sarangsohail/Desktop/squeezy/server/db'); 

class PropertyAmenity {
  static async create(propertyAmenity) {
    const query = `
      INSERT INTO PropertyAmenities (PropertyID, AmenityID)
      VALUES (?, ?)
    `;
    const values = [
      propertyAmenity.PropertyID,
      propertyAmenity.AmenityID
    ];

    try {
      const [result] = await db.query(query, values);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error creating property amenity');
    }
  }

  static async findByPropertyId(propertyId) {
    const query = `
      SELECT * FROM PropertyAmenities WHERE PropertyID = ?
    `;
    const values = [propertyId];

    try {
      const [rows] = await db.query(query, values);
      return rows;
    } catch (error) {
      console.log(error);
      throw new Error('Error retrieving property amenities');
    }
  }

  static async deleteByPropertyId(propertyId) {
    const query = `
      DELETE FROM PropertyAmenities WHERE PropertyID = ?
    `;
    const values = [propertyId];

    try {
      const [result] = await db.query(query, values);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error deleting property amenities');
    }
  }
}

module.exports = PropertyAmenity;