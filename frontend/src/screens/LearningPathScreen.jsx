import {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Rating from '../components/Rating';
// import Course from '../components/Course'

const LearningPathScreen = () => {
    // const [courses, setCourses] = useState([]);

    // useEffect(() => {
    //     const fetchCourses = async () => {
    //     const { data } = await axios.get('/api/courses');
    //     setCourses(data)
    //     };

    //     fetchCourses();

    // }, []);


    // const [learningPath, setLearningPath] = useState([]);

    const { id: learningPathId } = useParams ();

    // useEffect(() => {
    //     const fetchLearningPath = async () => {
    //     const { data } = await axios.get(`/api/learning-paths/${learningPathId}`);
    //     setLearningPath(data)
    //     };

    //     fetchLearningPath();

    // }, [learningPathId]);

  return (
    <>
        <Link className='btn btn-light my-3' to="/">Go Back</Link>
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

                {/* <h4>Courses: </h4>
                <Row>
                {courses.map( (course) => (
                <Col key={course._id}>
                    <Course course={course}/>
                </Col>
                ))}
                </Row> */}
            </Col>

            <Col md={4}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>           
                                <Button className='btn-block' type='button' disabled={learningPath.countInStock === 0} >
                                    Add To Cart
                                </Button>
                        </ListGroup.Item>
                    </ListGroup>
            </Col>
            
        </Row>
    </>
  )
}

export default LearningPathScreen