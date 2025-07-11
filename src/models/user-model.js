const db = require("../config/db");

const createUsersTable = async () => {
  const sql = `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`;
  await db.query(sql);
};

const findUserByEmail = async (email) => {
  const users = await db.query("SELECT * FROM users WHERE email = ?", [email]);
  return users[0];
};

const createUser = async (name, email, hashedPassword) => {
  const result = await db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashedPassword]
  );
  return result;
};

module.exports = {
  findUserByEmail,
  createUser,
  createUsersTable,
};
