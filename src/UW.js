import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import uw from './images/W.png';
import Card from 'react-bootstrap/Card';
import post1 from './images/posts/1.png';
import like from './images/like.png';
import sched from './images/sched.png';
import roster from './images/uwroster.png';

function UW() {
    return(
        <div className='App-header'>
            <Container fluid>
                <Row className='Teamhead'>
                    <img width='170' height='100' alt="text" src={uw} style={{marginBottom: '0.5rem', marginRight: '20px'}}></img>
                    Washington Husky Men's Basketball Team
                </Row>
                <Row>
                    <Col xl={3} className="Schedule">
                        Team Schedule
                        <img src={sched} alt="text"></img>
                    </Col>
                    <Col xl={6} className='News'>
                        FEED
                        <Card style={{ width: '40rem', background: '#4B2E83', marginBottom: '2rem', marginLeft: '8rem' }} className="Post">
                            <Card.Header className='d-flex justify-content-between' style={{fontSize: '20px'}}>From Twitter...</Card.Header>
                            <Card.Body>
                                <img width='500' alt="text" src={post1} />
                            </Card.Body>
                            <div style={{ marginLeft: '25rem', fontSize: '20px'}}>
                                12<img width='40' alt="text" src={like} />
                            </div>
                        </Card>
                    </Col>
                    <Col xl={3} className="Roster">
                        Washington Huskies Roster
                        <img width='450' alt="text" src={roster} ></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default UW;