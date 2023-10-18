const { db } = require('/Users/sarangsohail/Desktop/squeezy/server/db'); 

class CryptoPayment {
  static async create(cryptoPayment) {
    const query = `
      INSERT INTO CryptoPayments (PaymentID, CryptoType, TransactionID, CoinbaseCommerceReceipt)
      VALUES (?, ?, ?, ?)
    `;
    const values = [
      cryptoPayment.PaymentID,
      cryptoPayment.CryptoType,
      cryptoPayment.TransactionID,
      cryptoPayment.CoinbaseCommerceReceipt
    ];

    try {
      const [result] = await db.query(query, values);
      return result.insertId;
    } catch (error) {
      console.log(error);
      throw new Error('Error creating crypto payment');
    }
  }

  static async findByPaymentId(paymentId) {
    const query = `
      SELECT * FROM CryptoPayments WHERE PaymentID = ?
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
      throw new Error('Error retrieving crypto payment');
    }
  }

  static async updateByPaymentId(paymentId, updateCryptoPayment) {
    const query = `
      UPDATE CryptoPayments SET ? WHERE PaymentID = ?
    `;
    const values = [updateCryptoPayment, paymentId];

    try {
      const [result] = await db.query(query, values);

      if (result.affectedRows === 0) {
        return null;
      }

      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error updating crypto payment');
    }
  }

  static async deleteByPaymentId(paymentId) {
    const query = `
      DELETE FROM CryptoPayments WHERE PaymentID = ?
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
      throw new Error('Error deleting crypto payment');
    }
  }
}

module.exports = CryptoPayment;
