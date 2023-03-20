
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from "reactstrap";
import propTypes from 'prop-types';

const Course = (props) => {
    const navigate = useNavigate();

    const updateCourse = () => {
        navigate("/add-course", { state: props.course });
    };

    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="fw-bold">{props.course.title}</CardSubtitle>
                <CardText>{props.course.description}</CardText>

                <Container className="text-center">
                    <Button color="danger" onClick={() => props.deleteCourse(props.course.id)}>Delete</Button>
                    <Button color="warning" onClick={updateCourse} style={{ marginLeft: '10px' }}>Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

Course.propTypes = {  //tight coupling types using propTypes
    id: propTypes.number
}

export default Course;