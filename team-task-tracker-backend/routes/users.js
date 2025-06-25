const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register user
router.post('/register', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});

// Login (by name for simplicity)
router.post('/login', async (req, res) => {
  const { name } = req.body;
  const user = await User.findOne({ name });
  if (user) {
    res.json({ success: true, user });
  } else {
    res.status(401).json({ success: false, message: 'Invalid user' });
  }
});

module.exports = router;
