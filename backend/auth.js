const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Connect to MongoDB
const uri = process.env.MONGO_URI

mongoose.connect(uri, clientOptions);


// Define a schema for the users collection
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['customer', 'restaurant'] },
});

const User = mongoose.model('users', userSchema);

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email and password match in the users collection
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Return the user data and role
    res.json({ user: { email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
