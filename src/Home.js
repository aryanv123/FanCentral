import './App.css';
import uwb from './images/uwbasketball.png';
import uwf from './images/uwfootball.jpg';
import badge from './images/medal.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from "react";
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Tweet } from "react-twitter-widgets";
import { CommentBox } from './Comment.js'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {comment: false}
        this.commentShow = this.commentShow.bind(this);
    }

    commentShow() {
        this.setState(prevState => ({ comment: !prevState.comment }))
    }

    render() {
        return(
            <div className='App-header'>
                <Container fluid>
                    <Row>
                        <Col xl={2} className="Teams">
                            <div className='Teamtag'>
                                My Teams
                            </div>
                            <Link to='/uw'><img width='150' height='150' alt="idk" src={uwb} style={{marginBottom: '0.5rem'}}></img></Link>
                            <img width='150' height='150' alt="idk" src={uwf} style={{marginBottom: '0.5rem'}}></img>
                        </Col>
                        <Col xl={8} className='Feed'>
                            <Card style={{ width: '40rem', background: '#303030', marginBottom: '2rem', marginLeft: '17rem' }} className="Post">
                                <Card.Header className='d-flex justify-content-between Teamtag' style={{ background: '#3a3b3c'}}>From Twitter...</Card.Header>
                                <Card.Body>
                                    <Tweet tweetId='1381674911517667329' />
                                </Card.Body>
                                <div style={{ display: 'flex', marginLeft: '1rem', marginBottom: '1rem' }}><Button variant="secondary" onClick={this.commentShow}>Comment</Button></div>
                                { this.state.comment ? <CommentBox/> : null }
                            </Card>
                            <Card style={{ width: '45rem', background: '#303030', marginBottom: '2rem' }} className="Post">
                                <Card.Header className='d-flex justify-content-between' style={{ background: '#3a3b3c'}}>From Reddit...</Card.Header>
                                <Card.Body>
                                <iframe id="reddit-embed" title="1" src="https://www.redditmedia.com/r/huskies/comments/9zvyuw/the_perfect_postgame_quote/?ref_source=embed&amp;ref=share&amp;embed=true&amp;theme=light" sandbox="allow-scripts allow-same-origin allow-popups" height="426" width="640" scrolling="no"></iframe>
                                </Card.Body>
                                <div style={{ display: 'flex', marginLeft: '1rem', marginBottom: '1rem' }}><Button variant="secondary" onClick={this.commentShow}>Comment</Button></div>
                                { this.state.comment ? <CommentBox/> : null }
                            </Card>
                            <Card style={{ width: '40rem', background: '#303030', marginBottom: '2rem', marginLeft: '17rem' }} className="Post">
                                <Card.Header className='d-flex justify-content-between Teamtag' style={{ background: '#3a3b3c'}}>From Twitter...</Card.Header>
                                <Card.Body>
                                    <Tweet tweetId='1380561323226845184' />
                                </Card.Body>
                                <div style={{ display: 'flex', marginLeft: '1rem', marginBottom: '1rem' }}><Button variant="secondary" onClick={this.commentShow}>Comment</Button></div>
                                { this.state.comment ? <CommentBox/> : null }
                            </Card>
                            <Card style={{ width: '45rem', background: '#303030', marginBottom: '2rem' }} className="Post">
                                <Card.Header className='d-flex justify-content-between Teamtag' style={{ background: '#3a3b3c'}}>From Reddit...</Card.Header>
                                <Card.Body>
                                <iframe id="reddit-embed" title="2" src="https://www.redditmedia.com/r/huskies/comments/e47nt1/cougar_fans_trying_to_talk_about_our_season_in_a/?ref_source=embed&amp;ref=share&amp;embed=true&amp;theme=light" sandbox="allow-scripts allow-same-origin allow-popups" height="543" width="640" scrolling="no"></iframe>                            
                                </Card.Body>
                                <div style={{ display: 'flex', marginLeft: '1rem', marginBottom: '1rem' }}><Button variant="secondary" onClick={this.commentShow}>Comment</Button></div>
                                { this.state.comment ? <CommentBox/> : null }
                            </Card>
                            <Card style={{ width: '40rem', background: '#303030', marginBottom: '2rem', marginLeft: '17rem' }} className="Post">
                                <Card.Header className='d-flex justify-content-between Teamtag' style={{ background: '#3a3b3c'}}>From Twitter...</Card.Header>
                                <Card.Body>
                                    <Tweet tweetId='1379131724894859266' />
                                </Card.Body>
                                <div style={{ display: 'flex', marginLeft: '1rem', marginBottom: '1rem' }}><Button variant="secondary" onClick={this.commentShow}>Comment</Button></div>
                                { this.state.comment ? <CommentBox/> : null }
                            </Card>
                            <Card style={{ width: '40rem', background: '#303030', marginBottom: '2rem', marginLeft: '17rem' }} className="Post">
                                <Card.Header className='d-flex justify-content-between Teamtag' style={{ background: '#3a3b3c'}}>From Twitter...</Card.Header>
                                <Card.Body>
                                    <Tweet tweetId='1376619627824914433' />
                                </Card.Body>
                                <div style={{ display: 'flex', marginLeft: '1rem', marginBottom: '1rem' }}><Button variant="secondary" onClick={this.commentShow}>Comment</Button></div>
                                { this.state.comment ? <CommentBox/> : null }
                            </Card>
                            <Card style={{ width: '45rem', background: '#303030', marginBottom: '2rem' }} className="Post">
                                <Card.Header className='d-flex justify-content-between Teamtag' style={{ background: '#3a3b3c'}}>From Reddit...</Card.Header>
                                <Card.Body>
                                <iframe id="reddit-embed" title="3" src="https://www.redditmedia.com/r/huskies/comments/jz6et7/i_mean/?ref_source=embed&amp;ref=share&amp;embed=true" sandbox="allow-scripts allow-same-origin allow-popups" height="543" width="640" scrolling="no"></iframe>                            
                                </Card.Body>
                                <div style={{ display: 'flex', marginLeft: '1rem', marginBottom: '1rem' }}><Button variant="secondary" onClick={this.commentShow}>Comment</Button></div>
                                { this.state.comment ? <CommentBox/> : null }
                            </Card>
                            <Card style={{ width: '40rem', background: '#303030', marginBottom: '2rem', marginLeft: '17rem' }} className="Post">
                                <Card.Header className='d-flex justify-content-between Teamtag' style={{ background: '#3a3b3c'}}>From Twitter...</Card.Header>
                                <Card.Body>
                                    <Tweet tweetId='1373318416908439554' />
                                </Card.Body>
                                <div style={{ display: 'flex', marginLeft: '1rem', marginBottom: '1rem' }}><Button variant="secondary" onClick={this.commentShow}>Comment</Button></div>
                                { this.state.comment ? <CommentBox/> : null }
                            </Card>
                            <Card style={{ width: '45rem', background: '#303030', marginBottom: '2rem' }} className="Post">
                                <Card.Header className='d-flex justify-content-between Teamtag' style={{ background: '#3a3b3c'}}>From Reddit...</Card.Header>
                                <Card.Body>
                                <iframe id="reddit-embed" title="4" src="https://www.redditmedia.com/r/huskies/comments/cxwerq/auburn_fans_get_it/?ref_source=embed&amp;ref=share&amp;embed=true" sandbox="allow-scripts allow-same-origin allow-popups" height="543" width="640" scrolling="no"></iframe>
                                </Card.Body>
                                <div style={{ display: 'flex', marginLeft: '1rem', marginBottom: '1rem' }}><Button variant="secondary" onClick={this.commentShow}>Comment</Button></div>
                                { this.state.comment ? <CommentBox/> : null }
                            </Card>
                        </Col>
                        <Col xl={2} className="Friends">
                            <img width='120' alt="idk" src={badge} style={{marginBottom: '0.5rem', float: 'right' }} />
                            {this.props.points}
                            <Link to='/rewards'>
                                <Button variant="secondary">Rewards Center</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;