import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import learningPaths from './data/learningPaths.js';

const port = process.env.PORT || 8000;

// connectDB(); //Connect to MongoDB :)

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.get('/api/learning-paths', (req, res) => {
    res.json(learningPaths);
});

app.get('/api/learning-paths/:id', (req, res) => {
    const learningPath = learningPaths.find((lP) => lP._id === req.params.id);
    res.json(learningPath);
});

app.listen(port, () => console.log(`Server running on port ${port}`));