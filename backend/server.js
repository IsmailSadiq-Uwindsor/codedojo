import express  from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import learningPaths from './data/learningPaths.js';
import courses from './data/courses.js';
import quizzes from './data/quizzes.js';

const port = process.env.PORT;

connectDB(); //Connect to MongoDB

const app = express();

//example.com/api/learningPaths
app.get('/api/learningPaths', (req, res) => {
    const learningPathList = learningPaths
    res.json(learningPathList);
})

//example.com/api/learningPaths/1
app.get('/api/learningPaths/:learningPathId', (req, res) => {
    const learningPath = learningPaths.find((lP) => lP._learningPathId === req.params.learningPathId);
    res.json(learningPath);
})

//example.com/api/learningPath/1/courses
app.get('/api/learningPaths/:learningPathId/courses', function(req, res) {
     // param = {learningPathId:1}
    // const courseList = courses.find((cL) => cL._learningPathId ===req.params.learningPathId );
    const params = req.params; // param = {learningPathId:1}
    const learningPathId = params.learningPathId;
    const courseList = courses.filter(course => course._learningPathId === learningPathId)
    res.json(courseList)
  })

//example.com/api/learningPath/1/courses/1
app.get('/api/learningPaths/:learningPathId/courses/:courseId', function(req, res) {
    // param = {learningPathId:1, courseId:1}
    const course = courses.find((c) => c._learningPathId === req.params.learningPathId && c._courseId === req.params.courseId)
    res.json(course)
  })

  //example.com/api/learningPath/1/courses/1/quizzes
app.get('/api/learningPaths/:learningPathId/courses/:courseId/quizzes', function(req, res) {
    // param = {learningPathId:1, courseId:1}
    // const quizList = quizzes.find((qL) => qL._learningPathId === req.params.learningPathId && qL._courseId == req.params.courseId )
    const params = req.params; // param = {learningPathId:1, courseId:1}
    const learningPathId = params.learningPathId;
    const courseId = params.courseId;
    const quizList = quizzes.filter(course => course._learningPathId === learningPathId && course._courseId === courseId)
    res.json(quizList)
  })

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.listen(port, () => console.log(`Server is running on port ${port}`))