import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import Footre from './Footer';
import { _postLogin } from '../Axios/apiClient'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addUserData } from '../redux/slices/userSlice';
import { toast } from 'react-toastify';
const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const Login = async () => {
        try {
            const data = {
                email: email,
                password: password
            }

            const response = await _postLogin('/user/login', data);

            if (response) {
                if (response.status == 201) {
                    console.log(response, "response")
                    dispatch(addUserData(response.data.data));
                    toast.success(response.data.message);
                    navigate('/');
                } else {
                    toast.error(response.data.message)
                }
            }
        } catch (error: any) {
            toast(error.response.data.message)
            console.log("Error: when User Register", error.response.data.message)
        }
    }


    return (
        <>
            <section className="vh-100">
                <Container fluid className="h-custom">
                    <Row className="d-flex justify-content-center align-items-center h-100">
                        <Col md={9} lg={6} xl={5} className="d-none d-lg-block">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid"
                                alt="Sample"
                            />
                        </Col>
                        <Col md={8} lg={6} xl={4}>
                            <Form>
                                {/* <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <Button variant="primary" className="btn-floating mx-1">
                                        <FaFacebookF />
                                    </Button>
                                    <Button variant="primary" className="btn-floating mx-1">
                                        <FaTwitter />
                                    </Button>
                                    <Button variant="primary" className="btn-floating mx-1">
                                        <FaLinkedinIn />
                                    </Button>
                                </div> */}
                                {/* 
                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div> */}


                                <Form.Group className="mb-4" controlId="form3Example3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        placeholder="Enter a valid email address"
                                        className="form-control form-control-lg"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="form3Example4">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        placeholder="Enter password"
                                        className="form-control form-control-lg"
                                    />
                                </Form.Group>

                                {/* <div className="d-flex justify-content-between align-items-center">
                                    <Form.Group controlId="form2Example3" className="mb-0">
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>
                                    <a href="#!" className="text-body">
                                        Forgot password?
                                    </a>
                                </div> */}

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <Button variant="primary" onClick={Login} className="btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                                        Login
                                    </Button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                        Don't have an account? <Link to="/register" className="link-danger">Register</Link>
                                    </p>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <Footre />
            </section>
        </>
    )
}
export default Login