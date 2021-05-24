// mongodb+srv://mean_user:mean_pwd@cluster0.ydftq.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./routes/product')

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

//  Define root url for the router
app.use('/api/products', productRoutes)


module.exports = app;