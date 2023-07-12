import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = ({ course}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/course/${course._id}`}/>
            {/* <Card.Img src={learningPath.image} variant="top"/> */}
        {/* </a> */}
        <Card.Body>
            <Link to={`/course/${course._id}`}>
                <Card.Title as='div' className='product-title'>
                    <strong>{course.title}</strong>
                </Card.Title>
            </Link>
        </Card.Body>
    </Card>
  )
}

export default Course
