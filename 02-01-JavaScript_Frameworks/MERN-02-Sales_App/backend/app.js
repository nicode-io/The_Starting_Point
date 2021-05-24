// mongodb+srv://mean_user:mean_pwd@cluster0.ydftq.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const stuffRoutes = require('./routes/stuff')
const userRoutes = require('./routes/user')

const app = express();


// Connect to database
mongoose.connect('mongodb+srv://mean_user:mean_pwd@cluster0.ydftq.gcp.mongodb.net/mean_ocr?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas!');
    })
    .catch(error => {
        console.log('Unable to connect to MongoDB Atlas!');
        console.error(error);
    });


//  Prevent CORS errors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


//  Parse incoming request
app.use(bodyParser.json());

//  Link static directories
app.use('/images', express.static(path.join(__dirname, 'images')));

//  Choose router for a kind of URL
app.use('/api/stuff', stuffRoutes)
app.use('/api/auth', userRoutes)


module.exports = app;