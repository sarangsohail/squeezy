const dbPromise = require('../db');

class User {
  static async create(user) {
    const db = await dbPromise;

    // Check if the email already exists
    const checkEmailQuery = 'SELECT * FROM Users WHERE Email = ?';
    const [rows] = await db.execute(checkEmailQuery, [user.Email]);
    if (rows.length > 0) {
      throw new Error('Email already exists');
    }

    const query = `
      INSERT INTO Users (Name, Email, PasswordHash, PhoneNumber, ProfilePicture, Role, AboutMe)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      user.Name,
      user.Email,
      user.PasswordHash,
      user.PhoneNumber,
      user.ProfilePicture,
      user.Role,
      user.AboutMe
    ];

    try {
      const [result] = await db.query(query, values);
      return result.insertId;
    } catch (error) {
      console.log(error);
      throw new Error('Error creating user');
    }
  }

  static async findById(userId) {
    const query = `
      SELECT * FROM Users WHERE ID = ?
    `;
    const values = [userId];

    try {
      const [rows] = await db.query(query, values);

      if (rows.length === 0) {
        return null;
      }

      return rows[0];
    } catch (error) {
      console.log(error);
      throw new Error('Error retrieving user');
    }
  }

  static async updateById(userId, updateUser) {
    const query = `
      UPDATE Users SET ? WHERE ID = ?
    `;
    const values = [updateUser, userId];

    try {
      const [result] = await db.query(query, values);

      if (result.affectedRows === 0) {
        return null;
      }

      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error updating user');
    }
  }

  static async deleteById(userId) {
    const query = `
      DELETE FROM Users WHERE ID = ?
    `;
    const values = [userId];

    try {
      const [result] = await db.query(query, values);

      if (result.affectedRows === 0) {
        return null;
      }

      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error deleting user');
    }
  }
}

module.exports = User;