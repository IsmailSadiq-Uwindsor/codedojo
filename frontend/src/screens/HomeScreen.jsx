import {useEffect, useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import LearningPath from '../components/LearningPath'
import axios from 'axios';

const HomeScreen = () => {
  const [learningPaths, setLearningPaths] = useState([]);

  useEffect(() => {
    const fetchLearningPaths = async () => {
      const { data } = await axios.get('/api/learning-paths');
      setLearningPaths(data)
    };

    fetchLearningPaths();

  }, []);

  return (
    <>
        <h1>Learning Paths</h1>
        <Row>
            {learningPaths.map( (learningPath) => (
                <Col key={learningPath._id} sm={12} md={6} lg={4} xl={3}>
                    <LearningPath learningPath={learningPath}/>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen