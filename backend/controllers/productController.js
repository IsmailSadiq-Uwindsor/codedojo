import asyncHandler from '../middleware/asyncHandler.js';
import LearningPath from '../models/learningPathModel.js';


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

export { getLearningPaths, getLearningPathById };