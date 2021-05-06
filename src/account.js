import './App.css';
import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import profile from './images/aryan.png';


class Account extends React.Component {

    render() {
        return(
            <div className='App-header'>
                <h1 style={{}}>Account Profile</h1>
                <img width='250' height='250' alt="text" src={profile} style={{marginBottom: '0.5rem'}}></img>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Aryan" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Aryan@aryan.com" />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Save Changes
                    </Button>
                </Form>
            </div> 
        )
    }
}

export default Account;