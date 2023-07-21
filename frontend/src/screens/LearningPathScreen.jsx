import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import { useGetLearningPathDetailsQuery, useGetCoursesForLearningPathQuery } from '../slices/productsApiSlice';
import { useGetUserProfileQuery } from '../slices/usersApiSlice';
import Course from '../components/Course'
import Rating from '../components/Rating';
import Loader from "../components/Loader";
import Message from '../components/Message'; 
import { addToCart } from '../slices/cartSlice';
import { FaInfoCircle } from "react-icons/fa"
import { useEffect, useState } from 'react';

const LearningPathScreen = () => {

    const { learningPathId: learningPathId} = useParams ();

    const { userInfo } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data : learningPath, isLoading : learningPathIsLoading, isError : learningPathError } = useGetLearningPathDetailsQuery(learningPathId);

    const { data : courses, isLoading : coursesIsLoading, isError : coursesError } = useGetCoursesForLearningPathQuery(learningPathId);

    const addToCartHandler = () => {
      dispatch(addToCart({ ...learningPath}));
      navigate('/cart')
    }
  
    let local = JSON.parse(localStorage.getItem("cart")); 
    let button = false;
    if(local !== null){
    for (let i = 0; i < local.cartItems.length; i++){
          if (local.cartItems[i]._id === learningPathId){
            button = true
          }
      }
    }

    const { data: profile } = useGetUserProfileQuery();

    let access = false;
    if(userInfo !== null){
      for (let i = 0; i < profile?.purchases?.length; i++){
          if (profile.isAdmin === true || profile.purchases[i].learningPathId === learningPathId){
            access = true;
          }
      }
      // for (let i = 0; i < userInfo.purchases.length; i++){
      //   if (userInfo.isAdmin === true || userInfo.purchases[i].learningPathId === learningPathId){
      //     access = true;
      //   }
      // }
    }

  return (
    <>
        <Link className='btn btn-light my-3' to="/learningpaths">Go Back</Link>

        {learningPathIsLoading ? (
          <Loader/>
        ) : learningPathError ? (<Message variant='danger'>{learningPathError?.data?.message || learningPathError.error}</Message>) : ( <>
          { access  
          ? 
            <Button style = {{display: 'none'}} className='btn-block' type='button' disabled={learningPath.isActive === false || button === true} onClick={addToCartHandler}> Add To Cart </Button>
          :
            
            <Button style = {{marginLeft: 20}} className='btn-block' type='button' disabled={learningPath.isActive === false || button === true} onClick={addToCartHandler}> Add To Cart </Button>
          }

          <Row>
            <Col md={5}>
                <ListGroup variant='flush'>
                    <ListGroup.Item></ListGroup.Item>
                      <ListGroup.Item>
                          <h3><strong>{learningPath.name}</strong></h3>
                      </ListGroup.Item>
                      <ListGroup.Item><strong>LearningPath Description:</strong> {learningPath.description}</ListGroup.Item>  
                      <ListGroup.Item><strong>Price:</strong> ${learningPath.price}</ListGroup.Item>
                      <ListGroup.Item>
                          <Rating value={learningPath.rating} text={`${learningPath.numReviews} reviews`}/>
                      </ListGroup.Item>  
                      <ListGroup.Item></ListGroup.Item>        
                </ListGroup>

                {coursesIsLoading ? (
                <h4>Loading Courses...</h4>
                ) : coursesError ? (<Message variant='danger'>{coursesError?.data?.message || coursesError.error}</Message>) : ( <>
                    { access  
                    ? 
                    <h4>Courses: </h4> 
                    : 
                    <>
                      <h4>Courses: </h4> 
                      <h6> <FaInfoCircle/> Purchase LearningPath to gain access to courses</h6>
                    </>
                    }
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