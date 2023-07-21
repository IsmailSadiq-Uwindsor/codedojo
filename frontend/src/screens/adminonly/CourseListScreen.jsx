import { LinkContainer } from 'react-router-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { FaTimes, FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify'
import Message from '../../components/Message';
import Loader from '../../components/Loader'
import { useGetCoursesForLearningPathQuery, useCreateCourseMutation } from '../../slices/productsApiSlice';


const CourseListScreen = () => {

    const { learningPathId: learningPathId } = useParams();

    const { data: courses, isLoading, error, refetch } = useGetCoursesForLearningPathQuery(learningPathId);

    console.log(courses)

    const [createCourse, { isLoading: loadingCreate }] = useCreateCourseMutation(learningPathId);

    const deleteHandler = (id) => {
        console.log('delete', id)
    }

    const createCoursethHandler = async () => {
        if (window.confirm('Are you sure you want to create a new Course?')) {
            try {
                await createCourse(learningPathId);
                refetch();
            } catch (err) {
                toast.error(err?.data?.message || err.error)
            }
        }
    }

  return (
    <>
     <Link className='btn btn-light my-3' to="/admin/learningpathlist">Go Back</Link>
        <Row className='align-items-center'>
            <Col>
                <h1>Courses</h1>
            </Col>
            <Col className='text-end'>
                <Button className='btn-sm m-3' onClick={ createCoursethHandler }>
                    <FaEdit/> Create Course
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
                            <th>LEARNINGPATH ID</th>
                            <th>COURSE ID</th>
                            <th>TITLE</th>
                            {/* <th>CATEGORY</th>
                            <th>LANGUAGE</th> */}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { courses.map((course, index) => (
                                <tr key={course._id}>
                                    <td>{course.learningPathId}</td>
                                    <td>{course._id}</td>
                                    <td>{course.title}</td>
                                    {/* <td>CA$ {learningPath.price}</td>
                                    <td>{learningPath.category}</td>
                                    <td>{learningPath.language}</td> */}
                                    <td>
                                        <LinkContainer to={`/admin/learningpath/${learningPathId}/course/${course._id}/edit`}>
                                            <Button variant='light' className='btn-sm mx-2'><FaEdit/></Button>
                                        </LinkContainer>
                                        <Button variant='danger' className='btn-sm' onClick={ () => deleteHandler(course._id)}><FaTrash style={{color: 'white'}}/></Button>
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

export default CourseListScreen