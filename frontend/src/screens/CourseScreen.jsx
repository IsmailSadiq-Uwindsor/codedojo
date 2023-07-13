// import {useEffect, useState} from 'react'
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Course from '../components/Course'
import courses from '../courses'

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

            </Col>
        </Row>

    </>
  )
}

export default CourseScreen;
