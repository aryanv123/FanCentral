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

async function loginUser(email, password) {
    return fetch('http://127.0.0.1:5000/login?username=' + email + '&password=' + password, {
        method:"GET",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
        .then(data => data.json())
}

class Login extends React.Component {
 

    // login (username, password) {
    //     const http = new XMLHttpRequest()
    //     const url = "localhost:5000/login?username=" + username + "&password=" + password
    //     http.open("GET", url)
    //     http.send

    //     http.onreadystatechange = (e) => {
    //         response = Http.responseText
    //         console.log(response)
    //     }
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.email)
        console.log(this.state.password)
    }

    handleLogin() {
        console.log(loginUser(this.state.email, this.state.password))
        console.log(this.state.email)
        console.log(this.state.password)
    }

    render() {
        
        return(
            <div className='App-header'>
                <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Welcome to FanCentral!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={e => this.setState({ email: e.target.value })} />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} />
                        </Form.Group>
                        <Button type="submit" onClick={() => {this.props.logged(); this.handleLogin()}}>
                            Submit
                        </Button>
 
                    </Form>
                </Modal.Body>

                </Modal.Dialog>
            </div>
        );
    }
}

export default Login;