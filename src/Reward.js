import './App.css';
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import badge from './images/medal.png';
import basketball from './images/basketballGame.jpg';
import jersey from './images/jersey.jpg';
import football from './images/footballGame.jpg';
import hoodie from './images/hoodie.png';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import uw from './images/W.png';
import sched from './images/sched.png';
import roster from './images/uwroster.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Rewards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            item: null,
            cantBuyShow: false
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleCantBuyShow = this.handleCantBuyShow.bind(this);
        this.handleCantBuyClose = this.handleCantBuyClose.bind(this);
    }

    handleShow(item) {
        this.setState({
            show: true,
            item: item
        })
    }

    handleCantBuyShow(item) {
        this.setState({
            cantBuyShow: true,
            item: item
        })
    }

    handleCantBuyClose() {
        this.setState({
            cantBuyShow: false
        })
    }

    handleClose() {
        this.setState({
            show: false
        })
    }

    render() {


        return(
            <div className='App-header'>
                <h1 style={{ marginTop: '10rem', fontWeight: '700', fontSize: '50px' }}>Rewards Center</h1>
                <div className='Badge'>
                    <img width='120' src={badge} style={{marginBottom: '0.5rem', float: 'right' }} /> 
                    {this.props.points}
                </div>
                <div style={{ display: 'flex'}}>
                    <Card style={{ width: '30rem', height: '18rem', background: '#303030' }}>
                        <div>
                            UW HOODIE
                        </div>
                        <img width='200' src={hoodie} style={{ marginLeft: '8rem' }} />
                        <Button variant='secondary' style={{ fontSize: '20px', position: 'absolute', bottom: '0', width: '100%' }} onClick={() => {
                            if((this.props.points - 50000) >= 0) {
                                this.props.buy(50000); this.handleShow("UW HOODIE")
                            } else {
                                this.handleCantBuyShow("UW HOODIE")
                            }
                            }}>
                            50,000
                        </Button>
                    </Card>
                    <Card style={{ width: '30rem', height: '18rem', background: '#303030' }}>
                        <div>
                            UW JERSEY 
                        </div>
                        <img width='200' src={jersey} style={{ marginLeft: '8rem' }} />
                        <Button variant='secondary' style={{ fontSize: '20px', position: 'absolute', bottom: '0', width: '100%' }} onClick={() => {
                            if((this.props.points - 75000) >= 0) {
                                this.props.buy(75000); this.handleShow("UW JERSEY")
                            } else {
                                this.handleCantBuyShow("UW JERSEY")
                            }
                            }}>
                            75,000
                        </Button>
                    </Card>
                </div>
                <div style={{ display: 'flex', marginTop: '3rem'}}>
                    <Card style={{ width: '30rem', height: '18rem', background: '#303030' }}>
                        <div>
                            UW HOME FOOTBALL TICKETS (2)
                        </div>
                        <img width='300' src={football} style={{ marginLeft: '5rem' }} />
                        <Button variant='secondary' style={{ fontSize: '20px', position: 'absolute', bottom: '0', width: '100%' }} onClick={() => {
                            if((this.props.points - 200000) >= 0) {
                                this.props.buy(200000); this.handleShow("UW HOME FOOTBALL TICKETS (2)")
                            } else {
                                this.handleCantBuyShow("UW HOME FOOTBALL TICKETS (2)")
                            }
                            }}>
                            200,000
                        </Button>
                    </Card>
                    <Card style={{ width: '30rem', height: '18rem', background: '#303030', fontSize: '30px' }}>
                        <div>
                            UW HOME B-BALL TICKETS (2)
                        </div>
                        <img width='300' src={basketball} style={{ marginLeft: '5rem' }} />
                        <Button variant='secondary' style={{ fontSize: '20px', position: 'absolute', bottom: '0', width: '100%' }} onClick={() => {
                            if((this.props.points - 200000) >= 0) {
                                this.props.buy(200000); this.handleShow("UW HOME B-BALL TICKETS (2)")
                            } else {
                                this.handleCantBuyShow("UW HOME B-BALL TICKETS (2)")
                            }
                            }}>
                            200,000
                        </Button>
                    </Card>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Congratulations!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>You have just redeemed the {this.state.item}!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={this.state.cantBuyShow} onHide={this.handleCantBuyClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>I'm Sorry!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>You don't seem to have enough points to redeem {this.state.item}.</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCantBuyClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default Rewards;