//* Imports
// 3rd-Party Libraries
const express = require('express');
const cors = require('cors');
// Project files
const testRoutes = require('./routes/test');

//* App Creation
const app = express();
const port = 5000;

//* Middlewares
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
});

//* Routers
app.use('/api/test', testRoutes);

//* App Configuration
app.listen(port, () => {
    console.log(`Nicode API listening at http://localhost:${port}`)
})