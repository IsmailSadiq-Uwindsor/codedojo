import express  from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';

import learningPathRoutes from './routes/learningPathRoutes.js'

const port = process.env.PORT;

connectDB(); //Connect to DB

const app = express();

app.use('/api/learningPaths', learningPathRoutes);

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.listen(port, () => console.log(`Server is running on port ${port}`))