const { db } = require('/Users/sarangsohail/Desktop/squeezy/server/db'); 

class PropertyRating {
  static async create(propertyRating) {
    const query = `
      INSERT INTO PropertyRatings (PropertyID, UserID, Rating)
      VALUES (?, ?, ?)
    `;
    const values = [
      propertyRating.PropertyID,
      propertyRating.UserID,
      propertyRating.Rating
    ];

    try {
      const [result] = await db.query(query, values);
      return result.insertId;
    } catch (error) {
      console.log(error);
      throw new Error('Error creating property rating');
    }
  }

  static async findByPropertyId(propertyId) {
    const query = `
      SELECT * FROM PropertyRatings WHERE PropertyID = ?
    `;
    const values = [propertyId];

    try {
      const [rows] = await db.query(query, values);
      return rows;
    } catch (error) {
      console.log(error);
      throw new Error('Error retrieving property ratings');
    }
  }

  static async updateById(ratingId, updateRating) {
    const query = `
      UPDATE PropertyRatings SET ? WHERE ID = ?
    `;
    const values = [updateRating, ratingId];

    try {
      const [result] = await db.query(query, values);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error updating property rating');
    }
  }

  static async deleteById(ratingId) {
    const query = `
      DELETE FROM PropertyRatings WHERE ID = ?
    `;
    const values = [ratingId];

    try {
      const [result] = await db.query(query, values);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error deleting property rating');
    }
  }
}

module.exports = PropertyRating;
