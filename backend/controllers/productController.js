import asyncHandler from '../middleware/asyncHandler.js';
import LearningPath from '../models/learningPathModel.js';
import Course from '../models/courseModel.js';
import Quiz from '../models/quizModel.js';
import User from '../models/userModel.js'


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

// @desc        Create a LearningPath
//@route        POST /api/learningpaths
//@access       Private/Admin
const createLearningPath = asyncHandler( async (req, res) => {
    const  learningPath = new LearningPath ({
        userId: req.user._id,
        name: 'Sample name',
        description: 'Sample description',
        language: 'Sample language',
        category: 'Sample category',
    })
    const createdLearningPath = await learningPath.save();
    res.status(201).json(createdLearningPath);
});

// @desc        Update a LearningPath
//@route        PUT /api/learningpaths/:learningPathId
//@access       Private/Admin
const updateLearningPath = asyncHandler( async (req, res) => {
    const { name, description, language, category,  price, isActive } = req.body;

    const learningPath = await LearningPath.findById(req.params.learningPathId);

    if (learningPath) {
        learningPath.name = name;
        learningPath.description = description;
        learningPath.language = language;
        learningPath.category = category;
        learningPath.price = price;
        learningPath.isActive = isActive;

        const updatedLearningPath = await learningPath.save();
        res.status(200).json(updatedLearningPath);
    } else {
        res.status(404);
        throw new Error('Resource not found');
    }
});

// @desc        Create a Course
//@route        POST /api/learningpaths/:learningPathId/courses
//@access       Private/Admin
const createCourse = asyncHandler( async (req, res) => {
    const  course = new Course ({
        userId: req.user._id,
        learningPathId: req.params.learningPathId,
        title: 'Sample title',
        abstract: 'Sample abstract'
    })
    const createdCourse = await course.save();
    res.status(201).json(createdCourse);
});

// @desc        Update a Course
//@route        PUT /api/learningpaths/:learningPathId/courses/:courseId
//@access       Private/Admin
const updateCourse = asyncHandler( async (req, res) => {
    const { title, abstract, video } = req.body;

    const course = await Course.findOne({learningPathId: req.params.learningPathId, _id: req.params.courseId});

    if (course) {
        course.title = title;
        course.abstract = abstract;
        course.video = video;

        const updatedCourse = await course.save();
        res.status(200).json(updatedCourse);
    } else {
        res.status(404);
        throw new Error('Resource not found');
    }
});

export { 
    getLearningPaths, 
    getLearningPathById, 
    getCoursesForLearningPath, 
    getCourseById, 
    getQuizzesForCourse,
    createLearningPath,
    updateLearningPath,
    createCourse,
    updateCourse
};