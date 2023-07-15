import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import LearningPath from '../models/learningPathModel.js';
import Course from '../models/courseModel.js';
import Quiz from '../models/quizModel.js';

const router = express.Router();

//example.com/api/learningPaths
router.get('/', asyncHandler(async (req, res) => {
    const learningPathList = await LearningPath.find({});
    res.json(learningPathList);
}));

//example.com/api/learningPaths/1
router.get('/:learningPathId', asyncHandler(async (req, res) => {
    const learningPath = await LearningPath.findById(req.params.learningPathId)
    if(learningPath) {
        return res.json(learningPath);
    } 
    res.status(404).json({ message: 'Learning Path not found' });
}));

//example.com/api/learningPaths/1/courses
router.get('/:learningPathId/courses', asyncHandler(async (req, res) => {
    const courseList = await Course.find({learningPathId: req.params.learningPathId})
    if(courseList) {
        return  res.json(courseList);
    }
    res.status(404).json({ message: 'This Learning Path does not have any courses' });
 }));

//example.com/api/learningPaths/1/courses/1
router.get('/:learningPathId/courses/:courseId', asyncHandler(async (req, res) => {
   const course = await Course.findOne({learningPathId: req.params.learningPathId, _id: req.params.courseId})
   if(course) {
    return  res.json(course);
    }
    res.status(404).json({ message: 'Course not found' });
 }));

 //example.com/api/learningPaths/1/courses/1/quizzes
 router.get('/:learningPathId/courses/:courseId/quizzes', asyncHandler(async (req, res) => {
   const quizList = await Quiz.find({learningPathId: req.params.learningPathId, courseId: req.params.courseId})
    if(quizList) {
    return  res.json(quizList);
    }
    res.status(404).json({ message: 'This Course does not have any quizzes' });
 }));

export default router;