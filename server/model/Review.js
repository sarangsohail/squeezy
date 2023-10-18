const { db } = require('/Users/sarangsohail/Desktop/squeezy/server/db'); 

class Review {
  static async create(review) {
    const query = `
      INSERT INTO Reviews (UserID, PropertyID, Rating, Comment)
      VALUES (?, ?, ?, ?)
    `;
    const values = [
      review.UserID,
      review.PropertyID,
      review.Rating,
      review.Comment
    ];

    try {
      const [result] = await db.query(query, values);
      return result.insertId;
    } catch (error) {
      console.log(error);
      throw new Error('Error creating review');
    }
  }

  static async findByPropertyId(propertyId) {
    const query = `
      SELECT * FROM Reviews WHERE PropertyID = ?
    `;
    const values = [propertyId];

    try {
      const [rows] = await db.query(query, values);
      return rows;
    } catch (error) {
      console.log(error);
      throw new Error('Error retrieving reviews');
    }
  }

  static async updateById(reviewId, updateReview) {
    const query = `
      UPDATE Reviews SET ? WHERE ID = ?
    `;
    const values = [updateReview, reviewId];

    try {
      const [result] = await db.query(query, values);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error updating review');
    }
  }

  static async deleteById(reviewId) {
    const query = `
      DELETE FROM Reviews WHERE ID = ?
    `;
    const values = [reviewId];

    try {
      const [result] = await db.query(query, values);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error deleting review');
    }
  }
}

module.exports = Review;
