import logo from './images/ball.png';
import profile from './images/profile.png';
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
    this.state = { login: false }
    this.logged = this.logged.bind(this)
    this.logout = this.logout.bind(this)
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

  render() {
    var log;
    console.log(window.location.pathname)
    if (this.state.login == true) {
      log = (<div>
              <Navbar style={{background: '#4B2E83', display: 'flex'}} expand="lg" fixed='top'>
                  <Link to="/home">
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
            </div>);
    } else {
      log = (<div>
              <Navbar style={{background: '#4B2E83', display: 'flex'}} expand="lg" fixed='top'>
                  <Link to="/home">
                    <img width='60' height='60' src={logo} style={{marginBottom: '0.5rem'}}></img>
                    <Navbar.Brand style={{fontSize: '40px', marginLeft: '20px', marginBottom: '0', fontWeight: 'bold', color: '#D7BE69'}}>FanCentral</Navbar.Brand>
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
      homePage = <div>
                  <Route path='/FanCentral'>
                    <Login logged={this.logged} />
                  </Route>
                 </div>
    } else {
      homePage = <div>
                    <Route path='/FanCentral'>
                      <Home />
                    </Route>
                  </div>
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
              <Rewards />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
