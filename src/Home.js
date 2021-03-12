import './App.css';
import uw from './images/W.png'
import Card from 'react-bootstrap/Card';
import React, { Component } from "react";
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
    return(
        <div className='App-header'>
            <Container fluid>
                <Row>
                    <Col xl={2} className="Teams">
                        <div className='Teamtag'>
                            Favorited Teams
                        </div>
                        <Link to='/uw'><img width='150' height='100' src={uw} style={{marginBottom: '0.5rem'}}></img></Link>
                    </Col>
                    <Col xl={8}>
                        <Card style={{ width: '60rem', background: '#4B2E83', marginBottom: '2rem' }} className="Post">
                            <Card.Header className='d-flex justify-content-between' style={{fontSize: '20px'}}>From Twitter...</Card.Header>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '60rem', background: '#4B2E83' }} className="Post">
                            <Card.Header className='d-flex justify-content-between' style={{fontSize: '20px'}}>From Instagram...</Card.Header>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={2} className="Friends">3</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;