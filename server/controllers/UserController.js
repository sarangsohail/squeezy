const User = require('../model/User.js');

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    console.log(newUser); // Log the newUser object
    const userId = await User.create(newUser);
    res.status(201).json({ userId });
  } catch (error) {
    console.error(error.message); // Log the specific error message
    res.status(500).json({ error: 'An error occurred while creating the user' });
  }
};


const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving the user' });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving all users' });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;
    await User.updateById(userId, updatedUser);
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the user' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.deleteById(userId);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the user' });
  }
};

module.exports = {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser
};
