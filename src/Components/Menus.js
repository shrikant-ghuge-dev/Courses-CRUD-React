import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

const Menus = () => {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/home" action>Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="add-course" action>Add Courses</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="view-courses" action>View Courses</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="signup" action>Signup</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>Contact</Link>
        </ListGroup>
    )
}

export default Menus;