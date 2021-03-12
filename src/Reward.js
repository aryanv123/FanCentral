import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import badge from './images/badge.png';
import giftcard from './images/card.png';
import jersey from './images/jersey.png';
import ticket from './images/ticket.png';
import meet from './images/tom.jpg';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import uw from './images/W.png';
import sched from './images/sched.png';
import roster from './images/uwroster.png';

function Rewards() {
    return(
        <div className='App-header'>
            <div className='Badge'>
                <img width='120' src={badge} style={{marginBottom: '0.5rem', float: 'right' }} /> 
                543,330
            </div>
            <div style={{ display: 'flex'}}>
                <Card style={{ width: '30rem', height: '18rem', background: '#4B2E83' }}>
                    <div>
                        150,000 
                        <img width='50' src={badge} style={{marginBottom: '0.5rem' }} />
                    </div>
                    <img width='300' src={giftcard} style={{ marginLeft: '5rem' }} />
                </Card>
                <Card style={{ width: '30rem', height: '18rem', background: '#4B2E83' }}>
                    <div>
                        300,000 
                        <img width='50' src={badge} style={{marginBottom: '0.5rem' }} />
                    </div>
                    <img width='200' src={jersey} style={{ marginLeft: '8rem' }} />
                </Card>
            </div>
            <div style={{ display: 'flex', marginTop: '3rem'}}>
                <Card style={{ width: '30rem', height: '18rem', background: '#4B2E83' }}>
                    <div>
                        750,000 
                        <img width='50' src={badge} style={{marginBottom: '0.5rem' }} />
                    </div>
                    <img width='300' src={ticket} style={{ marginLeft: '5rem' }} />
                </Card>
                <Card style={{ width: '30rem', height: '18rem', background: '#4B2E83', fontSize: '30px' }}>
                    <div>
                        Meet Tom Brady 1,000,000 
                        <img width='50' src={badge} style={{marginBottom: '0.5rem' }} />
                    </div>
                    <img width='300' src={meet} style={{ marginLeft: '5rem' }} />
                </Card>
            </div>
        </div>
    );
}

export default Rewards;