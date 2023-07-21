import express from 'express';
import { 
    getLearningPaths, 
    getLearningPathById, 
    getCoursesForLearningPath, 
    getCourseById, 
    getQuizzesForCourse, 
    createLearningPath
} from '../controllers/productController.js';
import {protect, admin} from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getLearningPaths).post(protect, admin, createLearningPath);

router.route('/:learningPathId').get(getLearningPathById);

router.route('/:learningPathId/courses').get(getCoursesForLearningPath);

router.route('/:learningPathId/courses/:courseId').get(getCourseById);

router.route('/:learningPathId/courses/:courseId/quizzes').get(getQuizzesForCourse);

export default router;