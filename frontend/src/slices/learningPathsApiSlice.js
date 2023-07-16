import { LEARNINGPATHS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const learningPathsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLearningPaths: builder.query({
            query: () => ({
                url: LEARNINGPATHS_URL
            }),
            keepUnusedDataFor: 20
        }),
        getLearningPathDetails: builder.query({
            query: (learningPathId) => ({
                url: `${LEARNINGPATHS_URL}/${learningPathId}`
            }),
            keepUnusedDataFor: 20
        }),
        getCoursesForLearningPath: builder.query({
            query: (learningPathId) => ({
                url: `${LEARNINGPATHS_URL}/${learningPathId}/courses`
            }),
            keepUnusedDataFor: 20
        }),
        getCourseDetails: builder.query({
            query: ({learningPathId, courseId}) => ({
                url: `${LEARNINGPATHS_URL}/${learningPathId}/courses/${courseId}`
            }),
            keepUnusedDataFor: 20
        }),
        getQuizzesForCourse: builder.query({
            query: ({learningPathId, courseId}) => ({
                url: `${LEARNINGPATHS_URL}/${learningPathId}/courses/${courseId}/quizzes`
            }),
            keepUnusedDataFor: 20
        }),
    })
});

export const { useGetLearningPathsQuery, useGetLearningPathDetailsQuery, useGetCoursesForLearningPathQuery, useGetCourseDetailsQuery, useGetQuizzesForCourseQuery } = learningPathsApiSlice;

