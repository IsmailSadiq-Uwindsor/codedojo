import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import learningPaths from './data/learningPaths.js';
import courses from './data/courses.js';

const port = process.env.PORT || 8000;

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

app.get('/api/courses', (req, res) => {
    res.json(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find((c) => c._id === req.params.id);
    res.json(course);
});


app.listen(port, () => console.log(`Server running on port ${port}`));