require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require("cors");//For the client to work...


const helpRequestRoutes = require('./routes/helpRequestRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes');
const priorityRoutes = require('./routes/priorityRoutes');
const locationRoutes = require('./routes/locationRoutes');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(bodyParser.json());
app.use(cors());

// Define Routes
app.use('/api/helprequests', helpRequestRoutes);
app.use('/api/volunteers', volunteerRoutes);
app.use('/api/priorities', priorityRoutes);
app.use('/api/locations', locationRoutes);

const port = process.env.PORT || 5000;
const host = process.env.HOST;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
app.listen(port, host, () => {

    console.log(`express server is running at http://${host}:${port}`);
})
