import {useEffect, useState} from 'react'
// import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import { useGetCourseDetailsQuery, useGetQuizzesForCourseQuery } from '../slices/productsApiSlice';
import Quiz from '../components/Quiz'
import Loader from "../components/Loader";
import Message from '../components/Message'; 

const CourseScreen = () => {

    const { learningPathId: learningPathId, courseId: courseId } = useParams ();

    const courseData = useGetCourseDetailsQuery({learningPathId, courseId});

    const course = courseData.data
  
    const courseIsLoading = courseData.isLoading
  
    const courseError = courseData.isError  

    const quizzesData = useGetQuizzesForCourseQuery({learningPathId, courseId});
  
    const quizzes = quizzesData.data
    
    const quizzesIsLoading = quizzesData.isLoading
    
    const quizzesError = quizzesData.isError  

    const [test, setTest] = useState({})

  return (
    <>
        <Link className='btn btn-light my-3' to={`/learningPaths/${learningPathId}/courses`}>Go Back</Link>

        {courseIsLoading ? (
           <Loader/>
        ) : courseError ? (<Message variant='danger'>{courseError?.data?.message || courseError.error}</Message>) : ( <>
          <Row>
              <Col>
                  <ListGroup variant='flush'>
                      <ListGroup.Item></ListGroup.Item>

                      <ListGroup.Item>
                          <h3>{course.title}</h3>
                      </ListGroup.Item>

                      <ListGroup.Item className='center'> 
                              {course.abstract}  
                      </ListGroup.Item>    

                      <ListGroup.Item></ListGroup.Item>        
                  </ListGroup>

                  {quizzesIsLoading ? (
                  <h4>Loading Quizzes...</h4>
                  ) : quizzesError ? (<Message variant='danger'>{quizzesError?.data?.message || quizzesError.error}</Message>) : ( <>
                    <h4>Quizzes: </h4>
                    <Row>
                        {quizzes.map( (quiz, index) => (
                            <Row key={index} >
                                <Quiz courseId={courseId} quiz={quiz} test={test}/>
                            </Row>
                        ))}
                    </Row>
                    <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Button style = {{justifyContent: 'center'}} className='btn-block' type='button'>
                                            Submit
                        </Button>
                    </div>
                  </>)}
              </Col>
          </Row>
        </>)}
    </>
  )
}

export default CourseScreen;