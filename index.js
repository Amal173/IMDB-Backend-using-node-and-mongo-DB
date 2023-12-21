const express = require('express');
const { connectDb } = require('./config/dbConnection')
const cors = require('cors')
const dotenv = require('dotenv').config();
const movieRoutes = require('./router/watchlistRouter');
const app = express();
const port = process.env.PORT;
connectDb();
app.use(cors())
app.use(express.json());
app.use('/', movieRoutes);
app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
