const { db } = require('/Users/sarangsohail/Desktop/squeezy/server/db'); 

class Property {
  static async create(property) {
    const query = `
      INSERT INTO Properties (Title, Description, Price, Location, Type)
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [
      property.Title,
      property.Description,
      property.Price,
      property.Location,
      property.Type
    ];

    try {
      const [result] = await db.query(query, values);
      return result.insertId;
    } catch (error) {
      console.log(error);
      throw new Error('Error creating property');
    }
  }

  static async findById(propertyId) {
    const query = `
      SELECT * FROM Properties WHERE ID = ?
    `;
    const values = [propertyId];

    try {
      const [rows] = await db.query(query, values);

      if (rows.length === 0) {
        return null;
      }

      return rows[0];
    } catch (error) {
      console.log(error);
      throw new Error('Error retrieving property');
    }
  }

  static async updateById(propertyId, updateProperty) {
    const query = `
      UPDATE Properties SET ? WHERE ID = ?
    `;
    const values = [updateProperty, propertyId];

    try {
      const [result] = await db.query(query, values);

      if (result.affectedRows === 0) {
        return null;
      }

      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error updating property');
    }
  }

  static async deleteById(propertyId) {
    const query = `
      DELETE FROM Properties WHERE ID = ?
    `;
    const values = [propertyId];

    try {
      const [result] = await db.query(query, values);

      if (result.affectedRows === 0) {
        return null;
      }

      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error deleting property');
    }
  }
}

module.exports = Property;