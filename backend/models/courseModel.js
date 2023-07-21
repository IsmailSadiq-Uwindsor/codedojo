import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    learningPathId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "LearningPath"
    },
    title: {
        type: String,
        required: true
    },
    abstract: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: false
    },
    tags: {
        type: Array,
        required: false
    },
    courseSlug: {
        type: String,
        required: false
    },
    credits: {
        type: Number,
        required: false
    },
    category: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

const Course = mongoose.model("Course", courseSchema);

export default Course;