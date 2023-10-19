const dbPromise = require('../db');

class Amenity {
  static async create(amenity) {

    const db = await dbPromise;

    const query = `
      INSERT INTO Amenities (Name)
      VALUES (?)
    `;
    const values = [amenity.Name]; // Adjusted the property name to match the table column

    try {
      const [result] = await db.query(query, values);
      return result.insertId;
    } catch (error) {
      console.log(error);
      throw new Error('Error creating amenity');
    }
  }

  static async updateById(amenityId, updateAmenity) {

    const db = await dbPromise;

    const query = `
      UPDATE Amenities SET ? WHERE ID = ?
    `;
    const values = [updateAmenity, amenityId];

    try {
      const [result] = await db.query(query, values);

      if (result.affectedRows === 0) {
        return null;
      }

      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error updating amenity');
    }
  }

  static async deleteById(amenityId) {

    const db = await dbPromise;

    const query = `
      DELETE FROM Amenities WHERE ID = ?
    `;
    const values = [amenityId];

    try {
      const [result] = await db.query(query, values);

      if (result.affectedRows === 0) {
        return null;
      }

      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error deleting amenity');
    }
  }
}

module.exports = Amenity;