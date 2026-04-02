const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/booking');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', bookingRoutes);
// test database connection
app.get('/', async (req, res) => {

  try {
    const [rows] = await db.query('SELECT 1');

    res.send('MySQL connected successfully ✅');
  } catch (error) {

    console.log(error);
    res.send('Database connection failed ❌');

  }

});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});