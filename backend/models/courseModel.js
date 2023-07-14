import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
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
    title: {
        type: String,
        required: true
    },
    abstract: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    courseSlug: {
        type: String,
        required: true
    },
    credits: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Course = mongoose.model("Course", courseSchema);

export default Course;