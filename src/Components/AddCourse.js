import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../Services/BootApi";

const AddCourse = () => {
    const location = useLocation();
    const [course, setCourse] = useState({
        id: '',
        title: '',
        description: ''
    });

    useEffect(() => {
        document.title = "Add Courses";

        //set form when update click
        if (location.state) {
            setCourse(location.state);
        }
    }, []);

    const handleChange = (event) => {
        setCourse({ ...course, [event.target.name]: event.target.value });
    };

    const clearForm = () => {
        setCourse({
            id: '',
            title: '',
            description: ''
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (location.state) {
            axios({
                method: 'put',
                url: `${base_url}/course`,
                data: course
            }).then(res => {
                toast.success('record has been updated successfully!');
                clearForm();
            }, err => {
                toast.error(err);
            });
        } else {
            axios({
                method: 'post',
                url: `${base_url}/course`,
                data: course
            }).then(res => {
                toast.success('record has been added to the database');
                clearForm();
            }, err => {
                toast.error(err);
            });
        }
    }

    return (
        <>
            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form onSubmit={submitHandler}>
                <FormGroup>
                    <Label for="id">Course Id</Label>
                    <Input type="text" placeholder="Enter here" value={course.id} onChange={e => handleChange(e)} name="id" id="id" required />
                </FormGroup>
                <FormGroup>
                    <Label for="title">Course Title</Label>
                    <Input type="text" placeholder="Enter title here" value={course.title} onChange={e => handleChange(e)} name="title" id="title" />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Course Description</Label>
                    <Input type="textarea" style={{ height: 150 }} value={course.description} onChange={e => handleChange(e)} placeholder="Enter description here" name="description" id="description" />
                </FormGroup>
                <Container className="text-center">
                    <Button color="primary" type="submit">{location.state ? 'Update' : 'Save'}</Button>
                    <Button color="warning" type="button" onClick={clearForm} style={{ marginLeft: '10px' }}>Clear</Button>
                </Container>

            </Form>
        </>
    )
}

export default AddCourse;