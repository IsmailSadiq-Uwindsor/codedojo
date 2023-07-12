// import {useEffect, useState} from 'react'
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Rating from '../components/Rating';
import learningPaths from '../learningPaths'
import Course from '../components/Course'
import courses from '../courses'

const LearningPathScreen = () => {

    const { id: learningPathId } = useParams ();

    const learningPath = learningPaths.find((lP) => lP._id === learningPathId);

  return (
    <>
            <Link className='btn btn-light my-3' to="/">Go Back</Link>
            <Button style = {{marginLeft: 20}} className='btn-block' type='button' disabled={learningPath.countInStock === 0} >
                                    Add To Cart
            </Button>
        <Row>
            <Col md={5}>
                <ListGroup variant='flush'>
                    <ListGroup.Item></ListGroup.Item>

                    <ListGroup.Item>
                        <h3>{learningPath.name}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Rating value={learningPath.rating} text={`${learningPath.numReviews} reviews`}/>
                    </ListGroup.Item>

                    <ListGroup.Item>Price: ${learningPath.price}</ListGroup.Item>

                    <ListGroup.Item> Learning Description: {learningPath.description}</ListGroup.Item>    

                     <ListGroup.Item></ListGroup.Item>        
                </ListGroup>

                <h4>Courses: </h4>
                <Row>
                    {courses.map( (course) => (
                        //<Col key={course._id} sm={12} md={6} lg={4} xl={3}>
                        <Col key={course._id}>
                            <Course course={course}/>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    </>
  )
}

export default LearningPathScreen