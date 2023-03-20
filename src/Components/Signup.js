import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const Signup = () => {
    const [userData, setUserData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        dob: ""
    });

    useEffect(() => {
        document.title = "Signup";
    }, []);

    const submitHandler = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:8080/signup',
            data: userData
        }).then(res => {
            toast.success('record has been added to the database');
            setUserData({
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                dob: ""
            })
        }, err => {
            toast.error(err);
        });
    }

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };
    return (
        <>
            <h3 className="text-center my-3">Signup Form</h3>
            <Form onSubmit={submitHandler}>
                <FormGroup>
                    <Label for="first_name">First Name</Label>
                    <Input type="text" placeholder="Enter firstname here" value={userData.first_name} onChange={e => handleChange(e)} name="first_name" id="first_name" />
                </FormGroup>
                <FormGroup>
                    <Label for="last_name">Last Name</Label>
                    <Input type="text" placeholder="Enter lastname here" value={userData.last_name} onChange={e => handleChange(e)} name="last_name" id="last_name" />
                </FormGroup>
                <FormGroup>
                    <Label for="dob">DOB</Label>
                    <Input type="text" placeholder="Enter dob here" value={userData.dob} onChange={e => handleChange(e)} name="dob" id="dob" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" placeholder="Enter email here" value={userData.email} onChange={e => handleChange(e)} name="email" id="email" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" placeholder="Enter password here" value={userData.password} onChange={e => handleChange(e)} name="password" id="password" />
                </FormGroup>
                <Container>
                    <Button color="primary" type="submit">Submit</Button>
                </Container>
            </Form>
        </>
    )
}

export default Signup;