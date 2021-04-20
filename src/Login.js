import './App.css';
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



class Login extends React.Component {

    render() {
        return(
            <div className='App-header'>
                <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Welcome to FanCentral!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="Register" style={{ marginRight: '20px' }}>
                            Register
                        </Button>
                        <Link to='/home'>
                            <Button variant="primary" type="login" onClick = {this.props.logged}>
                                Login
                            </Button>
                        </Link>
                    </Form>
                </Modal.Body>

                </Modal.Dialog>
            </div>
        );
    }
}

export default Login;