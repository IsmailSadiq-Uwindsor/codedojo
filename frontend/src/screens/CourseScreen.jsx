import {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import { useGetCourseDetailsQuery, useGetQuizzesForCourseQuery } from '../slices/learningPathsApiSlice';
import Quiz from '../components/Quiz'

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
          <h2>Loading Course Details...</h2>
        ) : courseError ? (<div>{courseError?.data?.message || courseError.error}</div>) : ( <>
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
                  <h3>Loading Quizzes...</h3>
                  ) : quizzesError ? (<div>{quizzesError?.data?.message || quizzesError.error}</div>) : ( <>
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