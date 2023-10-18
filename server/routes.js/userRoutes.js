const express = require('express');
const router = express.Router();
const {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser
} = require('../controllers/UserController.js');

router.post('/users', createUser);
router.get('/users/:id', getUser);
router.get('/users', getUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
