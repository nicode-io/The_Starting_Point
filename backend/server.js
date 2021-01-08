import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();



app.get('/', (req, res) => {
    res.send('API is running');
})

// Use router from productRoutes
app.use('/api/products', productRoutes);

app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
})

// Middleware to manage errors
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500  : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
})

// Middleware to log requested url
app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
})

const PORT = process.env.PORT || 5000;

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`
))

