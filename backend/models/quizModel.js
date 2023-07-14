import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    learningPath: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "LearningPath"
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Course"
    },
    question: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        required: true,
        default: []
    }
}, {
    timestamps: true
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;