const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const uri = process.env.MONGO_URI;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

	  const userRoutes = require('./routes/user');
	  const restaurantRoutes = require('./routes/restaurant');
	  const authRoute = require('./auth');

	  app.use('/user/', userRoutes);
	  app.use('/restaurant/', restaurantRoutes);
	  app.use('/login', authRoute);

	  app.listen(port, () => {
		  console.log(`Server is listening on port: ${port}`)

	  });

  } finally {
    await mongoose.disconnect();
  }
}
run().catch(console.dir);
