import express from 'express';
import { 
    getLearningPaths, 
    getLearningPathById, 
    getCoursesForLearningPath, 
    getCourseById, 
    getQuizzesForCourse 
} from '../controllers/productController.js';
const router = express.Router();

router.route('/').get(getLearningPaths);

router.route('/:learningPathId').get(getLearningPathById);

router.route('/:learningPathId/courses').get(getCoursesForLearningPath);

router.route('/:learningPathId/courses/:courseId').get(getCourseById);

router.route('/:learningPathId/courses/:courseId/quizzes').get(getQuizzesForCourse);

export default router;