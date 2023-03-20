import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Form, Button, Container, FormGroup, Input, Label } from "reactstrap";

const Login = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        document.title = "Login";
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
                email: "",
                password: ""
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
            <h2>Login</h2>
            <Form onSubmit={submitHandler}>
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

export default Login;