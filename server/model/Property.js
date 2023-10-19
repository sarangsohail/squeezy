const dbPromise = require('../db');

class Property {
  static async create(property) {

    const db = await dbPromise;
  
    const query = `
      INSERT INTO Properties (Title, Description, Location, Latitude, Longitude, Type, PricePerNight, NumberOfBedrooms, NumberOfBathrooms, MaximumNumberOfGuests, HostID)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      property.Title,
      property.Description,
      property.Location,
      property.Latitude,
      property.Longitude,
      property.Type,
      property.PricePerNight,
      property.NumberOfBedrooms,
      property.NumberOfBathrooms,
      property.MaximumNumberOfGuests,
      property.HostID
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

    const db = await dbPromise;

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

  static async findAll() {

    const db = await dbPromise;
  
    const query = 'SELECT * FROM Properties';
  
    try {
      const [rows] = await db.query(query);
      return rows;
    } catch (error) {
      console.log(error);
      throw new Error('Error retrieving all properties');
    }
  }
  

  static async updateById(propertyId, updateProperty) {
    const db = await dbPromise;

    const query = `
      UPDATE Properties SET Title = ?, Description = ?, Location = ?, Latitude = ?, Longitude = ?, Type = ?, PricePerNight = ?, NumberOfBedrooms = ?, NumberOfBathrooms = ?, MaximumNumberOfGuests = ?, HostID = ? WHERE ID = ?
    `;
    const values = [
      updateProperty.Title,
      updateProperty.Description,
      updateProperty.Location,
      updateProperty.Latitude,
      updateProperty.Longitude,
      updateProperty.Type,
      updateProperty.PricePerNight,
      updateProperty.NumberOfBedrooms,
      updateProperty.NumberOfBathrooms,
      updateProperty.MaximumNumberOfGuests,
      updateProperty.HostID,
      propertyId
    ];

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

    const db = await dbPromise;

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