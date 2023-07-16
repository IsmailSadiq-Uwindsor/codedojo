import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import { useGetLearningPathDetailsQuery, useGetCoursesForLearningPathQuery } from '../slices/productsApiSlice';
import Course from '../components/Course'
import Rating from '../components/Rating';
import Loader from "../components/Loader";
import Message from '../components/Message'; 

const LearningPathScreen = () => {

    const { learningPathId: learningPathId} = useParams ();

    const learningPathData = useGetLearningPathDetailsQuery(learningPathId);

    const learningPath = learningPathData.data
  
    const learningPathIsLoading = learningPathData.isLoading
  
    const learningPathError = learningPathData.isError

    const coursesData = useGetCoursesForLearningPathQuery(learningPathId);

    const courses = coursesData.data
  
    const coursesIsLoading = coursesData.isLoading
  
    const coursesError = coursesData.isError

  return (
    <>
        <Link className='btn btn-light my-3' to="/learningPaths">Go Back</Link>

        {learningPathIsLoading ? (
          <Loader/>
        ) : learningPathError ? (<Message variant='danger'>{learningPathError?.data?.message || learningPathError.error}</Message>) : ( <>
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

                {coursesIsLoading ? (
                <h4>Loading Courses...</h4>
                ) : coursesError ? (<Message variant='danger'>{coursesError?.data?.message || coursesError.error}</Message>) : ( <>
                  <h4>Courses: </h4>
                  <Row>
                      {courses.map( (course, index) => (
                          <Col key={index}>
                              <Course learningPathId={learningPathId} course={course}/>
                          </Col>
                      ))}
                  </Row>
                </>)}
            </Col>
          </Row>
        </>)}    
    </>
  )
}

export default LearningPathScreen