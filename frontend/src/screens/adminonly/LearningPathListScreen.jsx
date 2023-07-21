import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { FaTimes, FaEdit, FaTrash } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader'
import { useGetLearningPathsQuery } from '../../slices/productsApiSlice';


const LearningPathListScreen = () => {

    const { data: learningPaths, isLoading, error } = useGetLearningPathsQuery();

    const deleteHandler = (id) => {
        console.log('delete', id)
    }

  return (
    <>
        <Row className='align-items-center'>
            <Col>
                <h1>LearningPaths</h1>
            </Col>
            <Col className='text-end'>
                <Button className='btn-sm m-3'>
                    <FaEdit/> Create LearningPath
                </Button>
            </Col>
        </Row>
        {
        isLoading ? <Loader/> : error ? <Message  variant='danger'>{error}</Message> : (
            <>
                <Table striped hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>CATEGORY</th>
                            <th>LANGUAGE</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { learningPaths.map((learningPath) => (
                                <tr key={learningPath._id}>
                                    <td>{learningPath._id}</td>
                                    <td>{learningPath.name}</td>
                                    <td>CA$ {learningPath.price}</td>
                                    <td>{learningPath.category}</td>
                                    <td>{learningPath.language}</td>
                                    <td>
                                        <LinkContainer to={`/admin/learningpath/${learningPath._id}/edit`}>
                                            <Button variant='light' className='btn-sm mx-2'><FaEdit/></Button>
                                        </LinkContainer>
                                        <Button variant='danger' className='btn-sm' onClick={ () => deleteHandler(learningPath._id)}><FaTrash style={{color: 'white'}}/></Button>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </Table>
            </>
        )
        }
    </>
  )
}

export default LearningPathListScreen