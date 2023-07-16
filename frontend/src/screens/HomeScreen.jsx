import {Row, Col} from 'react-bootstrap';
import LearningPath from '../components/LearningPath';
import { useGetLearningPathsQuery } from '../slices/learningPathsApiSlice';

const HomeScreen = () => {

  const learningPathsData = useGetLearningPathsQuery();

  const learningPaths = learningPathsData.data

  const isLoading = learningPathsData.isLoading

  const error = learningPathsData.isError

  return (
    <>
        { isLoading ? (
          <h2>Loading...</h2>
        ) : error ? (<div>{ error?.data?.message || error.error }</div>) : (<>
          <h1>Learning Paths</h1>
          <Row>
              {learningPaths.map( (learningPath) => (
                  <Col key={learningPath._id} sm={12} md={6} lg={4} xl={3}>
                      <LearningPath learningPath={learningPath}/>
                  </Col>
              ))}
          </Row>
        </>) } 
    </>
  )
}

export default HomeScreen