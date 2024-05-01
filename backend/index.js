const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// Define a schema for the users collection
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['customer', 'restaurant'] },
});

const User = mongoose.model('users', userSchema);

const uri = process.env.MONGO_URI;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const userRoutes = require('./routes/user');
    const restaurantRoutes = require('./routes/restaurant');

    app.use('/user/', userRoutes);
    app.use('/restaurant/', restaurantRoutes);

    app.post('/login', async (req, res) => {
      try {
	      console.log("Got request: ", req.body);
        const { email, password } = req.body;

        // Check if the email and password match in the users collection
        const user = await User.findOne({ email, password });

        if (!user) {
          return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Return the user data and role
        res.json({ user: { email: user.email, role: user.role } });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
      }
    });

    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

run();
