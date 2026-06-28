const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// Routes
const studentsRoute = require('./routes/students');
const roomsRoute = require('./routes/rooms');
const paymentsRoute = require('./routes/payments');
const allocationsRoute = require('./routes/allocations');
const staffRoute = require('./routes/staff');
const complaintsRoute = require('./routes/complaints');
const authRoute = require('./routes/auth');

app.use('/api/students', studentsRoute);
app.use('/api/rooms', roomsRoute);
app.use('/api/payments', paymentsRoute);
app.use('/api/allocations', allocationsRoute);
app.use('/api/staff', staffRoute);
app.use('/api/complaints', complaintsRoute);
app.use('/api/auth', authRoute);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});