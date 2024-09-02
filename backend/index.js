

// This is all copied from ChatGPT

const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGODB_URI;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
  console.log('Connected to MongoDB');

  const db = client.db('mydatabase');
  const collection = db.collection('mycollection');

  // Define your routes here

  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});