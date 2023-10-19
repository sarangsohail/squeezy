const dbPromise = require('../db');

class Booking {
  static async create(booking) {
    const query = `
      INSERT INTO Bookings (UserID, PropertyID, CheckInDate, CheckOutDate, NumberOfGuests, TotalPrice, BookingStatus)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      booking.UserID,
      booking.PropertyID,
      booking.CheckInDate,
      booking.CheckOutDate,
      booking.NumberOfGuests,
      booking.TotalPrice,
      booking.BookingStatus
    ];

    try {
      const [result] = await db.query(query, values);
      return result.insertId;
    } catch (error) {
      console.log(error);
      throw new Error('Error creating booking');
    }
  }

  static async findById(bookingId) {
    const query = `
      SELECT * FROM Bookings WHERE ID = ?
    `;
    const values = [bookingId];

    try {
      const [rows] = await db.query(query, values);

      if (rows.length === 0) {
        return null;
      }

      return rows[0];
    } catch (error) {
      console.log(error);
      throw new Error('Error retrieving booking');
    }
  }

  static async updateById(bookingId, updateBooking) {
    const query = `
      UPDATE Bookings SET ? WHERE ID = ?
    `;
    const values = [updateBooking, bookingId];

    try {
      const [result] = await db.query(query, values);

      if (result.affectedRows === 0) {
        return null;
      }

      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error updating booking');
    }
  }

  static async deleteById(bookingId) {
    const query = `
      DELETE FROM Bookings WHERE ID = ?
    `;
    const values = [bookingId];

    try {
      const [result] = await db.query(query, values);

      if (result.affectedRows === 0) {
        return null;
      }

      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Error deleting booking');
    }
  }
}

module.exports = Booking;
