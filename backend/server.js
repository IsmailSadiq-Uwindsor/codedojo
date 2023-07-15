import express  from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js'

const port = process.env.PORT;

connectDB(); //Connect to MongoDB

const app = express();

app.use('/api/learningPaths', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.listen(port, () => console.log(`Server is running on port ${port}`))