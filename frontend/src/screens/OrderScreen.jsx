import { Link, useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useGetOrderDetailsQuery } from '../slices/ordersApiSlice';

const OrderScreen = () => {

    const { orderId: orderId } = useParams();

    const { data: order, refetch, isLoading, error } = useGetOrderDetailsQuery(orderId);

    console.log(order)

  return isLoading ? <Loader/> : error ? <Message variant='dange' /> : (
    <>
        <h1>Order: {order._id}</h1>
        <Row>
            <Col md={8}>
            <ListGroup>  
              <ListGroup.Item>
                <h2>User Details</h2>
                <p>
                  <strong>Name: </strong> {order.userId.name}
                </p>
                <p>
                  <strong>Email: </strong> {order.userId.email}
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>Payment Method</h2>
                <p>
                  <strong>Method: </strong> {order.paymentMethod}
                </p>
                  {order.isPaid ? (
                    <Message variant='success'>
                      Paid on {order.paidAt}
                    </Message>
                  ) : (
                    <Message variant='danger'>Not Paid</Message>
                  )}
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>Order Items</h2>
                {order.orderItems.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <Row>
                    <Col>
                        <Link to={`/learningPaths/${item.learningPathId}/courses`}>
                          {item.name}
                        </Link>
                    </Col>
                    <Col md={2}>
                      CA$ {item.price}
                    </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup.Item>
            </ListGroup>  
            </Col>

            <Col md={4}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h2>Order Summary</h2>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Items: </Col>
                      <Col>CA$ {order.itemsPrice}</Col>
                    </Row>
                    <Row>
                      <Col>Tax: </Col>
                      <Col>CA$ {order.taxPrice}</Col>
                    </Row>
                    <Row>
                      <Col>Total: </Col>
                      <Col>CA$ {order.totalPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  {/* PAY ORDER PLACE HOLDER */}
                </ListGroup>
              </Card>
            </Col>
        </Row>
    </>
  );

}

export default OrderScreen