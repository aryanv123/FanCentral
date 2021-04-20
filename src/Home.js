import './App.css';
import uwb from './images/uwbasketball.png';
import uwf from './images/uwfootball.jpg';
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
import post1 from './images/posts/1.png';
import post3 from './images/posts/3.png';
import post5 from './images/posts/5.png';
import post6 from './images/posts/6.png';
import like from './images/like.png';
import {Helmet} from "react-helmet";
import { Tweet } from "react-twitter-widgets";


function Home() {
    return(
        <div className='App-header'>
            <Container fluid>
                <Row>
                    <Col xl={2} className="Teams">
                        <div className='Teamtag'>
                            Favorited Teams
                        </div>
                        <Link to='/uw'><img width='150' height='150' src={uwb} style={{marginBottom: '0.5rem'}}></img></Link>
                        <img width='150' height='150' src={uwf} style={{marginBottom: '0.5rem'}}></img>
                    </Col>
                    <Col xl={8} className='Feed'>
                        <Card style={{ width: '40rem', background: '#4B2E83', marginBottom: '2rem' }} className="Post">
                            <Card.Header className='d-flex justify-content-between' style={{fontSize: '20px'}}>From Twitter...</Card.Header>
                            <Card.Body>
                                <Tweet tweetId='1381674911517667329' />
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '40rem', background: '#4B2E83', marginBottom: '2rem' }} className="Post">
                            <Card.Header className='d-flex justify-content-between' style={{fontSize: '20px'}}>From Twitter...</Card.Header>
                            <Card.Body>
                                <Tweet tweetId='1380561323226845184' />
                            </Card.Body>
                        </Card>
                        {/* <Card style={{ width: '40rem', background: '#4B2E83', marginBottom: '2rem' }} className="Post">
                            <Card.Header className='d-flex justify-content-between' style={{fontSize: '20px'}}>From Twitter...</Card.Header>
                            <Card.Body>
                                <img width='500' src={post5} />
                            </Card.Body>
                        </Card> */}
                        <Card style={{ width: '40rem', background: '#4B2E83', marginBottom: '2rem' }} className="Post">
                            <Card.Header className='d-flex justify-content-between' style={{fontSize: '20px'}}>From Twitter...</Card.Header>
                            <Card.Body>
                                <Tweet tweetId='1379131724894859266' />
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '40rem', background: '#4B2E83', marginBottom: '2rem' }} className="Post">
                            <Card.Header className='d-flex justify-content-between' style={{fontSize: '20px'}}>From Twitter...</Card.Header>
                            <Card.Body>
                                <Tweet tweetId='1376619627824914433' />
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '40rem', background: '#4B2E83', marginBottom: '2rem' }} className="Post">
                            <Card.Header className='d-flex justify-content-between' style={{fontSize: '20px'}}>From Twitter...</Card.Header>
                            <Card.Body>
                                <Tweet tweetId='1373318416908439554' />
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