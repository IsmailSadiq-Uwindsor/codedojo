import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Course = ({ learningPathId, course}) => {

    const { userInfo } = useSelector((state) => state.auth);

    let access = false;
    if(userInfo !== null){
    for (let i = 0; i < userInfo.purchases.length; i++){
          if (userInfo.isAdmin === true || userInfo.purchases[i].learningPathId === learningPathId){
            access = true;
          }
      }
    }

    // console.log(userInfo.isAdmin)
    
  return (

    <Card className='my-3 p-3 rounded'>
        {/* <Link to={`/login?redirect=/learningPaths/${learningPathId}/courses/${course._id}/quizzes`}/> */}
            {/* <Card.Img src={learningPath.image} variant="top"/> */}
            {/* </a> */}
            { access  ?
                <Card.Body>
                    <Link to={`/login?redirect=/learningPaths/${learningPathId}/courses/${course._id}/quizzes`}>
                        <Card.Title as='div' className='product-title'>
                            <strong>{course.title}</strong>
                        </Card.Title>
                    </Link>
                </Card.Body> 
            :
                <Card.Body>
                    {/* <Link to={`/login?redirect=/learningPaths/${learningPathId}/courses/${course._id}/quizzes`}> */}
                        <Card.Title as='div' className='product-title'>
                            <strong>{course.title}</strong>
                        </Card.Title>
                    {/* </Link> */}
                </Card.Body>
            }   
    </Card>
  )
}

export default Course
