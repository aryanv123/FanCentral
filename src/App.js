import logo from './images/logo.png';
import profile from './images/aryan.png';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SplitButton from 'react-bootstrap/SplitButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Home from './Home.js';
import UW from './UW.js';
import Rewards from './Reward.js';
import Login from './Login.js';
import Account from './account.js';
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
    this.addPoints = this.addPoints.bind(this)
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

  addPoints() {
    this.setState({
      points: (this.state.points + 100)
    })
  }

  render() {
    var log;
    console.log(window.location.pathname)
    if (this.state.login === true) {
      log = (<div>
              <Navbar style={{background: '#3a3b3c', display: 'flex'}} expand="lg" fixed='top'>
                  <Link to="/FanCentral">
                    <img width='60' height='60' alt="idk" src={logo} style={{marginBottom: '0.5rem'}}></img>
                    <Navbar.Brand style={{fontSize: '40px', marginLeft: '20px', marginBottom: '0', fontWeight: 'bold', color: 'white'}}>FanCentral</Navbar.Brand>
                  </Link>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                      <img width='70' height='70' alt="idk" src={profile} style={{marginBottom: '0.5rem'}}></img>
                      <SplitButton
                        menuAlign={{ lg: 'left' }}
                        title="Aryan"
                        id="dropdown-menu-align-responsive-2"
                        variant='custom'
                      >
                        <Link to='/account' className="drop">Profile</Link>
                        <Dropdown.Item onClick={this.logout}>Logout</Dropdown.Item>
                      </SplitButton>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>);
    } else {
      log = (<div>
              <Navbar style={{background: '#3a3b3c', display: 'flex'}} expand="lg" fixed='top'>
                  <Link to="/FanCentral">
                    <img width='60' height='60' alt="idk" src={logo} style={{marginBottom: '0.5rem'}}></img>
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
                    <Home points={this.state.points} addPoints={this.addPoints} />
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
            <Route path='/account'>
              <Account />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
