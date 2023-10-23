const PropertyImage = require('../model/PropertyImage');
const multer = require('multer');
const upload = multer({ dest: '../frontend/public/property_images' });

class PropertyController {

  static async createPropertyImage(req, res) {
    
    try {
      const { propertyId } = req.params;

      // Use the Multer middleware to process the 'image' field
      upload.single('image')(req, res, async (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ success: false, message: 'Error uploading property image' });
        }

        // Access the uploaded file using the 'filename' field from the Multer middleware
        const { filename } = req.file;

        // Create the property image in the database
        const imageId = await PropertyImage.createPropertyImage(propertyId, filename);

        res.status(200).json({ success: true, imageId });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error creating property image' });
    }
  }


  // static async createPropertyImage(req, res) {
  //   try {
  //     const { propertyId } = req.params;
  //     const { filename } = req.file; // Use 'filename' instead of 'path'
  
  //     // Create the property image in the database
  //     const imageId = await PropertyImage.createPropertyImage(propertyId, filename);
  
  //     res.status(200).json({ success: true, imageId });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ success: false, message: 'Error creating property image' });
  //   }
  // }
  
  // static async updatePropertyImage(req, res) {
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

  static async getPropertyImages(req, res) {
    try {
      const { propertyId } = req.params;

      // Get the property images from the database
      const images = await PropertyImage.findByPropertyId(propertyId);

      res.status(200).json({ success: true, images });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error retrieving property images' });
    }
  }

  static async deletePropertyImage(req, res) {
    try {
      const { imageId } = req.params;

      // Delete the property image from the database
      await PropertyImage.deleteById(imageId);

      res.status(200).json({ success: true, message: 'Property image deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error deleting property image' });
    }
  }
}

module.exports = PropertyController;
