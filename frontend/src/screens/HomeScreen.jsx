import {Row, Col} from 'react-bootstrap';
import { useGetLearningPathsQuery } from '../slices/productsApiSlice';
import LearningPath from '../components/LearningPath';
import Loader from "../components/Loader";
import Message from '../components/Message'; 

const HomeScreen = () => {

  const learningPathsData = useGetLearningPathsQuery();

  const learningPaths = learningPathsData.data

  const isLoading = learningPathsData.isLoading

  const error = learningPathsData.isError

  // console.log(learningPaths)

  return (
    <>
        { isLoading ? (
          <Loader/>
        ) : error ? (<Message variant='danger'>{ error?.data?.message || error.error }</Message>) : (<>
          <h1>Learning Paths</h1>
          <Row>
              {learningPaths.map( (learningPath) => (
                  learningPath.isActive && 
                  ( 
                    <Col key={learningPath._id} sm={12} md={6} lg={4} xl={3}>
                        <LearningPath learningPath={learningPath}/>
                    </Col>
                  )
              ))}
          </Row>
        </>) } 
    </>
  )
}

export default HomeScreen