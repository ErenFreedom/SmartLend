require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

// Middleware
app.use(express.json());

// DB Config
const db = config.get('mongoURI');

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
