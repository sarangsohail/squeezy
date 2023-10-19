const dbPromise = require('../db');

class Message {
  static async create(message) {
    const query = `
      INSERT INTO Messages (SenderID, ReceiverID, BookingID, Content, Timestamp)
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [
      message.SenderID,
      message.ReceiverID,
      message.BookingID,
      message.Content,
      message.Timestamp
    ];

    try {
      const [result] = await db.query(query, values);
      return result.insertId;
    } catch (error) {
      console.log(error);
      throw new Error('Error creating message');
    }
  }

  static async findById(messageId) {
    const query = `
      SELECT * FROM Messages WHERE ID = ?
    `;
    const values = [messageId];

    try {
      const [rows] = await db.query(query, values);

      if (rows.length === 0) {
        return null;
      }

      return rows[0];
    } catch (error) {
      console.log(error);
      throw new Error('Error retrieving message');
    }
  }

  static async updateById(messageId, updateMessage) {
    const query = `
      UPDATE Messages SET ? WHERE ID = ?
    `;
    const values = [updateMessage, messageId];

    try {
      const [result] = await db.query(query, values);

      if (result.affectedRows === 0) {
        return null;
      }

      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error updating message');
    }
  }

  static async deleteById(messageId) {
    const query = `
      DELETE FROM Messages WHERE ID = ?
    `;
    const values = [messageId];

    try {
      const [result] = await db.query(query, values);

      if (result.affectedRows === 0) {
        return null;
      }

      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error deleting message');
    }
  }
}

module.exports = Message;
