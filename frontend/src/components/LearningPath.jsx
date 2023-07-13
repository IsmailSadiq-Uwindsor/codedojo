import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const LearningPath = ({learningPath}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/learningPath/${learningPath._learningPathId}`}/>
            {/* <Card.Img src={learningPath.image} variant="top"/> */}
        {/* </a> */}
        <Card.Body>
            <Link to={`/learningPath/${learningPath._learningPathId}`}>
                <Card.Title as='div' className='product-title'>
                    <strong>{learningPath.name}</strong>
                </Card.Title>
            </Link>

            <Card.Text as='div'>
                <Rating value={learningPath.rating} text={`${learningPath.numReviews} reviews`}/>
            </Card.Text>

            <Card.Text as='h3'>
                CA$ {learningPath.price}
            </Card.Text>
          
        </Card.Body>
    </Card>
  )
}

export default LearningPath