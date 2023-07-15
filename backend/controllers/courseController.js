import asyncHandler from '../middleware/asyncHandler.js';
import Course from '../models/courseModel.js';


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

export { getCoursesForLearningPath, getCourseById };