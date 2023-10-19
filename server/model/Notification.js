const dbPromise = require('../db');

class Notification {
  static async create(notification) {
    const query = `
      INSERT INTO Notifications (UserID, Content, Timestamp, Type)
      VALUES (?, ?, ?, ?)
    `;
    const values = [
      notification.UserID,
      notification.Content,
      notification.Timestamp,
      notification.Type
    ];

    try {
      const [result] = await db.query(query, values);
      return result.insertId;
    } catch (error) {
      console.log(error);
      throw new Error('Error creating notification');
    }
  }

  static async findById(notificationId) {
    const query = `
      SELECT * FROM Notifications WHERE ID = ?
    `;
    const values = [notificationId];

    try {
      const [rows] = await db.query(query, values);

      if (rows.length === 0) {
        return null;
      }

      return rows[0];
    } catch (error) {
      console.log(error);
      throw new Error('Error retrieving notification');
    }
  }

  static async updateById(notificationId, updateNotification) {
    const query = `
      UPDATE Notifications SET ? WHERE ID = ?
    `;
    const values = [updateNotification, notificationId];

    try {
      const [result] = await db.query(query, values);

      if (result.affectedRows === 0) {
        return null;
      }

      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error updating notification');
    }
  }

  static async deleteById(notificationId) {
    const query = `
      DELETE FROM Notifications WHERE ID = ?
    `;
    const values = [notificationId];

    try {
      const [result] = await db.query(query, values);

      if (result.affectedRows === 0) {
        return null;
      }

      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error deleting notification');
    }
  }
}

module.exports = Notification;
