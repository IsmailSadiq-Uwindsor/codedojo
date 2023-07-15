import asyncHandler from '../middleware/asyncHandler.js';
import Quiz from '../models/quizModel.js';


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

export { getQuizzesForCourse };