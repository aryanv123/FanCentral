import logo from './images/ball.png';
import profile from './images/profile.png';
import reward from './images/present.png';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './Home.js';
import UW from './UW.js';
import Rewards from './Reward.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar style={{background: '#4B2E83', display: 'flex'}} expand="lg" fixed='top'>
          <Link to="/">
            <img width='60' height='60' src={logo} style={{marginBottom: '0.5rem'}}></img>
            <Navbar.Brand style={{fontSize: '40px', marginLeft: '20px', marginBottom: '0', fontWeight: 'bold', color: '#D7BE69'}}>FanCentral</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/rewards"><img width='60' height='60' src={reward} style={{marginBottom: '0.5rem'}}></img></Link>
              <Link to="/account">
                <Nav.Link style={{fontSize: '35px', color: '#D7BE69', paddingBottom: '1rem'}} className='float-right'>Aryan</Nav.Link>
                <img width='60' height='60' src={profile} style={{marginBottom: '0.5rem'}}></img>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/uw'>
            <UW />
          </Route>
          <Route path='/rewards'>
            <Rewards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
