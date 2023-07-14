import {useEffect, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import LearningPath from '../components/LearningPath';
import axios from 'axios';
// import learningPaths from '../learningPaths'

const HomeScreen = () => {

  const [learningPaths, setLearningPaths] = useState([])

  useEffect(() => {
    const fetchLearningPaths = async () => {
      const learningPathsAllData = await axios.get('/api/learningPaths');
      const learningPathsData = learningPathsAllData.data;
      setLearningPaths(learningPathsData);
    };
    fetchLearningPaths();
  }, []);

  // console.log(learningPaths)

  return (
    <>
        <h1>Learning Paths</h1>
        <Row>
            {learningPaths.map( (learningPath) => (
                <Col key={learningPath._learningPathId} sm={12} md={6} lg={4} xl={3}>
                    <LearningPath learningPath={learningPath}/>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen