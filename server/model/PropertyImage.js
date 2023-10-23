const dbPromise = require('../db');

class PropertyImage {

//   static async createPropertyImage(propertyId, image) {

//     console.log("creating image");
//     const db = await dbPromise;


//   try {
//     const query = `
//       INSERT INTO PropertyImages (PropertyID, ImageURL)
//       VALUES (?, ?)
//     `;
//     const values = [propertyId, image.path];

//     const [result] = await db.query(query, values);
//     return result.insertId;
//   } catch (error) {
//     console.log(error);
//     throw new Error('Error creating property image');
//   }
// }

static async createPropertyImage(propertyId, image) {
  console.log("creating image");
  const db = await dbPromise;

  try {
    const query = `
      INSERT INTO PropertyImages (PropertyID, ImageURL)
      VALUES (?, COALESCE(?, 'default_image_url'))
    `;
    const values = [propertyId, image.path];

    const [result] = await db.query(query, values);
    return result.insertId;
  } catch (error) {
    console.log(error);
    throw new Error('Error creating property image');
  }
}

  // async updatePropertyImage(req, res) {
  //   try {
  //     const { imageId } = req.params;
  //     const { image } = req.file;
  
  //     // Update the property image in the database
  //     await PropertyImage.update(imageId, { ImageURL: image.path });
  
  //     res.status(200).json({ success: true, message: 'Property image updated successfully' });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ success: false, message: 'Error updating property image' });
  //   }
  // }

  static async findByPropertyId(propertyId) {

    const db = await dbPromise;

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

    const db = await dbPromise;

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

  // static async getPropertyImages(propertyId) {

  //   console.log("getting images");

  //   try {
  //     const query = `
  //       SELECT * FROM PropertyImages WHERE PropertyID = ?
  //     `;
  //     const values = [propertyId];

  //     const [rows] = await db.query(query, values);
  //     return rows;
  //   } catch (error) {
  //     console.log(error);
  //     throw new Error('Error retrieving property images');
  //   }
  // }

  // static async deletePropertyImage(imageId) {
  //   try {
  //     const query = `
  //       DELETE FROM PropertyImages WHERE ID = ?
  //     `;
  //     const values = [imageId];

  //     const [result] = await db.query(query, values);
  //     return result;
  //   } catch (error) {
  //     console.log(error);
  //     throw new Error('Error deleting property image');
  //   }
  // }
}


module.exports =  PropertyImage;
