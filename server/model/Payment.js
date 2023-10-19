const dbPromise = require('../db');

class Payment {
  static async create(payment) {
    const query = `
      INSERT INTO Payments (BookingID, PaymentDate, Amount, PaymentStatus, PaymentMethod)
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [
      payment.BookingID,
      payment.PaymentDate,
      payment.Amount,
      payment.PaymentStatus,
      payment.PaymentMethod
    ];

    try {
      const [result] = await db.query(query, values);
      return result.insertId;
    } catch (error) {
      console.log(error);
      throw new Error('Error creating payment');
    }
  }

  static async findById(paymentId) {
    const query = `
      SELECT * FROM Payments WHERE ID = ?
    `;
    const values = [paymentId];

    try {
      const [rows] = await db.query(query, values);

      if (rows.length === 0) {
        return null;
      }

      return rows[0];
    } catch (error) {
      console.log(error);
      throw new Error('Error retrieving payment');
    }
  }

  static async updateById(paymentId, updatePayment) {
    const query = `
      UPDATE Payments SET ? WHERE ID = ?
    `;
    const values = [updatePayment, paymentId];

    try {
      const [result] = await db.query(query, values);

      if (result.affectedRows === 0) {
        return null;
      }

      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error updating payment');
    }
  }

  static async deleteById(paymentId) {
    const query = `
      DELETE FROM Payments WHERE ID = ?
    `;
    const values = [paymentId];

    try {
      const [result] = await db.query(query, values);

      if (result.affectedRows === 0) {
        return null;
      }

      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error deleting payment');
    }
  }
}

module.exports = Payment;
