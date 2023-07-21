import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const learningPathsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLearningPaths: builder.query({
            query: () => ({
                url: PRODUCTS_URL
            }),
            providesTags: ['LearningPaths'],
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
            providesTags: ['Courses'],
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
            invalidatesTags: ['LearningPaths']
        }),
        updateLearningPath: builder.mutation({
            query: (data) => ({
                url: `${PRODUCTS_URL}/${data.learningPathId}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['LearningPaths']
        }),
        createCourse: builder.mutation({
            query: (learningPathId) => ({
                url: `${PRODUCTS_URL}/${learningPathId}/courses`,
                method: 'POST',
            }),
            invalidatesTags: ['Courses']
        }),
        updateCourse: builder.mutation({
            query: (data) => ({
                url: `${PRODUCTS_URL}/${data.learningPathId}/courses/${data.courseId}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Courses']
        }),
    })
});

export const { 
    useGetLearningPathsQuery, 
    useGetLearningPathDetailsQuery, 
    useGetCoursesForLearningPathQuery, 
    useGetCourseDetailsQuery, 
    useGetQuizzesForCourseQuery, 
    useCreateLearningPathMutation,
    useUpdateLearningPathMutation,
    useCreateCourseMutation,
    useUpdateCourseMutation
} = learningPathsApiSlice;

