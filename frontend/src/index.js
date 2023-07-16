import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import LearningPathScreen from './screens/LearningPathScreen';
import CourseScreen from './screens/CourseScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/learningPaths' element={<HomeScreen/>}/>
      <Route path='/learningPaths/:learningPathId/courses' element={<LearningPathScreen/>}/>
      <Route path='/learningPaths/:learningPathId/courses/:courseId/quizzes' element={<CourseScreen/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  // </React.StrictMode>
);

reportWebVitals();

