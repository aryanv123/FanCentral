import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import uw from './images/W.png';
import sched from './images/sched.png';
import roster from './images/uwroster.png';

function UW() {
    return(
        <div className='App-header'>
            <Container fluid>
                <Row className='Teamhead'>
                    <img width='170' height='100' src={uw} style={{marginBottom: '0.5rem', marginRight: '20px'}}></img>
                    Washington Husky Men's Basketball Team
                </Row>
                <Row>
                    <Col xl={3} className="Schedule">
                        Team Schedule
                        <img src={sched} ></img>
                    </Col>
                    <Col xl={6} className='News'>
                        NEWS
                    </Col>
                    <Col xl={3} className="Roster">
                        Washington Huskies Roster
                        <img width='450' src={roster} ></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default UW;