import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { FaTimes, FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify'
import Message from '../../components/Message';
import Loader from '../../components/Loader'
import { useGetLearningPathsQuery, useCreateLearningPathMutation } from '../../slices/productsApiSlice';


const LearningPathListScreen = () => {

    const { data: learningPaths, isLoading, error, refetch } = useGetLearningPathsQuery();

    const [createLearningPath, { isLoading: loadingCreate }] = useCreateLearningPathMutation();

    const deleteHandler = (id) => {
        console.log('delete', id)
    }

    const createLearningPathHandler = async () => {
        if (window.confirm('Are you sure you want to create a new Learning Path?')) {
            try {
                await createLearningPath();
                refetch();
            } catch (err) {
                toast.error(err?.data?.message || err.error)
            }
        }
    }

  return (
    <>
        <Row className='align-items-center'>
            <Col>
                <h1>LearningPaths</h1>
            </Col>
            <Col className='text-end'>
                <Button className='btn-sm m-3' onClick={ createLearningPathHandler }>
                    <FaEdit/> Create LearningPath
                </Button>
            </Col>
        </Row>

        {loadingCreate && <Loader/>}

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