require('dotenv').config();
const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('DB error:', err));


const express = require('express');

const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB error: ", err));

// Routes
app.use('/api/trips', require('./routes/trips'));

app.get('/', (req, res) => {
  res.send("Wasel Backend API");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
