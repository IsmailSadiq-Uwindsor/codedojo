import asyncHandler from '../middleware/asyncHandler.js';
import LearningPath from '../models/learningPathModel.js';
import Course from '../models/courseModel.js';
import Quiz from '../models/quizModel.js';


// @desc        Fetch all LearningPaths
//@route        GET /api/learningPaths
//@access       Public
const getLearningPaths = asyncHandler( async (req, res) => {
    const learningPathList = await LearningPath.find({});
    res.json(learningPathList);
});


// @desc        Fetch a LearningPath
//@route        GET /api/learningPaths/:learningPathId
//@access       Public
const getLearningPathById = asyncHandler( async (req, res) => {
    const learningPath = await LearningPath.findById(req.params.learningPathId)
    if(learningPath) {
        return res.json(learningPath);
    } else {
        res.status(404);
        throw new Error('Learning Path not found');
    }
});

// @desc        Fetch all Courses for a LearningPath
//@route        GET /api/learningPaths/:learningPathId/courses
//@access       Public
const getCoursesForLearningPath = asyncHandler( async (req, res) => {
    const courseList = await Course.find({learningPathId: req.params.learningPathId})
    if(courseList) {
        return  res.json(courseList);
    } else {
        res.status(404);
        throw new Error('This Learning Path does not have any courses');
    }
});

// @desc        Fetch a Course
//@route        GET /api/learningPaths/:learningPathId/courses/:courseId
//@access       Public
const getCourseById = asyncHandler( async (req, res) => {
    const course = await Course.findOne({learningPathId: req.params.learningPathId, _id: req.params.courseId})
   if(course) {
    return  res.json(course);
    } else {
        res.status(404);
        throw new Error('Course not found');
    }
});

// @desc        Fetch all Quizes for a Course
//@route        GET /api/learningPaths/:learningPathId/courses/quizzes
//@access       Public
const getQuizzesForCourse = asyncHandler( async (req, res) => {
    const quizList = await Quiz.find({learningPathId: req.params.learningPathId, courseId: req.params.courseId})
    if(quizList) {
    return  res.json(quizList);
    } else {
        res.status(404);
        throw new Error('This Course does not have any quizzes');
    }
});

export { 
    getLearningPaths, 
    getLearningPathById, 
    getCoursesForLearningPath, 
    getCourseById, 
    getQuizzesForCourse 
};