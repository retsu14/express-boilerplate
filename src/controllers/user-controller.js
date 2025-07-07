const User = require("../models/user-model");

const getUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await User.createUser(name, email);
    res.status(201).json({ id: result.insertId, name, email });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  addUser,
};
