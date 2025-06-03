const db = require("../config/db");

class User {
  static async create({ username, email, password }) {
    const [result] = await db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, password]
    );
    return this.findById(result.insertId);
  }

  static async findByEmail(email) {
    const [rows] = await db.execute(`SELECT * FROM users WHERE email = ?`, [
      email,
    ]);
    return rows[0] || null;
  }

  static async findById(id) {
    const [rows] = await db.execute(
      "SELECT id, username, email FROM users WHERE id = ? LIMIT 1",
      [id]
    );

    return rows[0] || null;
  }
}

module.exports = User;
