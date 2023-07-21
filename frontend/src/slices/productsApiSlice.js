import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const learningPathsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLearningPaths: builder.query({
            query: () => ({
                url: PRODUCTS_URL
            }),
            keepUnusedDataFor: 5
        }),
        getLearningPathDetails: builder.query({
            query: (learningPathId) => ({
                url: `${PRODUCTS_URL}/${learningPathId}`
            }),
            keepUnusedDataFor: 5
        }),
        getCoursesForLearningPath: builder.query({
            query: (learningPathId) => ({
                url: `${PRODUCTS_URL}/${learningPathId}/courses`
            }),
            keepUnusedDataFor: 5
        }),
        getCourseDetails: builder.query({
            query: ({learningPathId, courseId}) => ({
                url: `${PRODUCTS_URL}/${learningPathId}/courses/${courseId}`
            }),
            keepUnusedDataFor: 5
        }),
        getQuizzesForCourse: builder.query({
            query: ({learningPathId, courseId}) => ({
                url: `${PRODUCTS_URL}/${learningPathId}/courses/${courseId}/quizzes`
            }),
            keepUnusedDataFor: 5
        }),
        createLearningPath: builder.mutation({
            query: () => ({
                url: PRODUCTS_URL,
                method: 'POST',
            }),
            invalidatesTags: ['LearningPath']
        })
    })
});

export const { useGetLearningPathsQuery, useGetLearningPathDetailsQuery, useGetCoursesForLearningPathQuery, useGetCourseDetailsQuery, useGetQuizzesForCourseQuery, useCreateLearningPathMutation } = learningPathsApiSlice;

