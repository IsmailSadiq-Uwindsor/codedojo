import {Row, Col} from 'react-bootstrap';
import { useGetLearningPathsQuery } from '../slices/productsApiSlice';
import LearningPath from '../components/LearningPath';
import Loader from "../components/Loader";
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import { useParams } from 'react-router-dom'; 

const HomeScreen = () => {

  const { pageNumber } = useParams();

  const {data, isLoading, error }  = useGetLearningPathsQuery({pageNumber});

  return (
    <>
        { isLoading ? (
          <Loader/>
        ) : error ? (<Message variant='danger'>{ error?.data?.message || error.error }</Message>) : (<>
          <h1>Learning Paths</h1>
          <Row>
              {data.learningPaths.map( (learningPath) => (
                  learningPath.isActive && 
                  ( 
                    <Col key={learningPath._id} sm={12} md={6} lg={4} xl={3}>
                        <LearningPath learningPath={learningPath}/>
                    </Col>
                  )
              ))}
          </Row>
          <Paginate pages={data.pages} page={data.page}/>
        </>) } 
    </>
  )
}

export default HomeScreen