import express from 'express';
import dotenv from 'dotenv';
import { notFound, errorHandler, originalUrl } from './middleware/errorMiddleware.js';
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

// Middleware calls
app.use(notFound);
app.use(errorHandler);
app.use(originalUrl);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`
))

