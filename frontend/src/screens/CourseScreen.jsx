// import {useEffect, useState} from 'react'
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Course from '../components/Course'
import courses from '../courses'
import Quiz from '../components/Quiz'
import quizzes from '../quizzes'

const CourseScreen = () => {

    const { courseId: courseId } = useParams ();

    const course = courses.find((c) => c._courseId === courseId);

  return (
    <>
        {/* <Link className='btn btn-light my-3' to={`/learningPath/${learningPath._id}`} >Go Back</Link> */}
         {/* <Link className='btn btn-light my-3' to="/learningPath/2" >Go Back</Link> */}
        {/* <Link className='btn btn-light my-3' to={`/learningPath/${learningPath._learningPathId}`}>Go Back</Link> */}
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

                <h4>Quizzes: </h4>
                <Row>
                    {quizzes.filter(obj => obj._courseId == courseId).map( (quiz) => (
                        //<Col key={course._id} sm={12} md={6} lg={4} xl={3}>
                        <Row key={quiz._courseId}>
                            {/* <Quiz learningPathId={learningPathId} courseId={courseId} quiz={quiz}/> */}
                            <Quiz courseId={courseId} quiz={quiz}/>
                        </Row>
                    ))}
                </Row>
                <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Button style = {{justifyContent: 'center'}} className='btn-block' type='button'>
                                        Submit
                    </Button>
                </div>
            </Col>
        </Row>

    </>
  )
}

export default CourseScreen;
