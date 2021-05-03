import logo from './images/logo.png';
import profile from './images/aryan.png';
import reward from './images/present.png';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './Home.js';
import UW from './UW.js';
import Rewards from './Reward.js';
import Login from './Login.js'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: false,
                    points: 500000}
    this.logged = this.logged.bind(this)
    this.logout = this.logout.bind(this)
    this.handleBuy = this.handleBuy.bind(this)
  }

  logged() {
    this.setState({
      login: true
    })
  }

  logout() {
    this.setState({
      login: false
    })
  }

  handleBuy(amount) {
    this.setState({
      points: (this.state.points - amount)
    })
  }

  render() {
    var log;
    console.log(window.location.pathname)
    if (this.state.login == true) {
      log = (<div>
              <Navbar style={{background: '#3a3b3c', display: 'flex'}} expand="lg" fixed='top'>
                  <Link to="/FanCentral">
                    <img width='60' height='60' src={logo} style={{marginBottom: '0.5rem'}}></img>
                    <Navbar.Brand style={{fontSize: '40px', marginLeft: '20px', marginBottom: '0', fontWeight: 'bold', color: 'white'}}>FanCentral</Navbar.Brand>
                  </Link>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                      <Link to="/account">
                        <Nav.Link style={{fontSize: '40px', fontWeight: 'bold', color: 'white', paddingBottom: '1rem'}} className='float-right'>Aryan</Nav.Link>
                        <img width='70' height='70' src={profile} style={{marginBottom: '0.5rem'}}></img>
                      </Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>);
    } else {
      log = (<div>
              <Navbar style={{background: '#3a3b3c', display: 'flex'}} expand="lg" fixed='top'>
                  <Link to="/FanCentral">
                    <img width='60' height='60' src={logo} style={{marginBottom: '0.5rem'}}></img>
                    <Navbar.Brand style={{fontSize: '40px', marginLeft: '20px', marginBottom: '0', fontWeight: 'bold', color: 'white'}}>FanCentral</Navbar.Brand>
                  </Link>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
      );
    }
    let homePage;
    if (!this.state.login) {
      homePage =  <Route path='/FanCentral'>
                    <Login logged={this.logged} />
                  </Route>
    } else {
      homePage =  <Route path='/FanCentral'>
                    <Home points={this.state.points} />
                  </Route>    
    }
    return (
      <div className="App">
        <Router>
          {log}
          <Switch>
            {homePage}
            <Route path='/uw'>
              <UW />
            </Route>
            <Route path='/rewards'>
              <Rewards points={this.state.points} buy={this.handleBuy} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
