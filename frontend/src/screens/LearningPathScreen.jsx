import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Rating from '../components/Rating';
import { useGetLearningPathDetailsQuery, useGetCoursesForLearningPathQuery } from '../slices/learningPathsApiSlice';
import Course from '../components/Course'

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
          <h2>Loading LearningPath Details...</h2>
        ) : learningPathError ? (<div>{learningPathError?.data?.message || learningPathError.error}</div>) : ( <>
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
                <h3>Loading Courses...</h3>
                ) : coursesError ? (<div>{coursesError?.data?.message || coursesError.error}</div>) : ( <>
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