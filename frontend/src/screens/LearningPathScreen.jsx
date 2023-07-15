import {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Rating from '../components/Rating';
// import learningPaths from '../learningPaths'
import Course from '../components/Course'
// import courses from '../courses'

const LearningPathScreen = () => {

    // const { learningPathId: learningPathId, courseId: courseId} = useParams ();
    const { learningPathId: learningPathId} = useParams ();
    const [learningPath, setLearningPath] = useState({});
    useEffect(() => {
        const fetchLearningPath = async () => {
          const learningPathAllData = await axios.get(`/api/learningPaths/${learningPathId}`);
          const learningPathData = learningPathAllData.data;
          setLearningPath(learningPathData);
        };
        fetchLearningPath();
      }, [learningPathId]);

      console.log(learningPath)
      console.log(learningPath.name)


    //   const { courseId: courseId } = useParams ();
      const [courses, setCourses] = useState([])
      useEffect(() => {
        const fetchCourses = async () => {
          const coursesAllData  = await axios.get(`/api/learningPaths/${learningPathId}/courses`);
          const coursesData = coursesAllData.data;
          setCourses(coursesData);
        };
        fetchCourses();
    }, [learningPathId]);
    //   }, [learningPathId, courseId]);

    // const { learningPathId: learningPathId } = useParams ();
    // const learningPath = learningPaths.find((cL) => cL._learningPathId === learningPathId); 

  return (
    <>
            <Link className='btn btn-light my-3' to="/learningPaths">Go Back</Link>
            <Button style = {{marginLeft: 20}} className='btn-block' type='button' disabled={learningPath.isActive === false} >
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
                    {/* {courses.filter(obj => obj._learningPathId == learningPathId).map( (course, index) => ( */}
                    {courses.map( (course, index) => (
                        <Col key={index}>
                            <Course learningPathId={learningPathId} course={course}/>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    </>
  )
}

export default LearningPathScreen