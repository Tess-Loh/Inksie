import React from "react";
import {Container, Row, Col, Navbar, Nav, NavItem, NavDropdown, Jumbotron, Button, Image} from "react-bootstrap";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import AOS from 'aos';
import 'aos/dist/aos.css';
import material from "../assets/images/wood-material.jpg"
import inkHolders from "../assets/images/ink-holders.jpg"

class About extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        AOS.init({
          duration : 1000
        })
    }
    render(){
        return(
        <div>
                <ScrollUpButton  ContainerClassName="over-ride-scroll-bt icon-arrow_upward" TransitionClassName="over-ride-transition-bt"
                        EasingType='easeOutCubic'
                        AnimationDuration={1000}/>
                <section className="about-us-section">
                    <Container>
                        <Row className="center-items">
                            <Col lg={10}>
                                <h2>About Us</h2>
                                <p className="big-text">Inksie is dedicated in handcrafting each and every ink holder with quality Balau wood, rejecting the pressure of mass production.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="creation-process no-padding">
                        <Row className="creation-process-item">
                            <Col lg={6} className="ink-txt-card">
                                <h3>We use high-quality material</h3>
                                <p>We source for balau wood which is known for <br /> being sturdy and long lasting.</p>
                            </Col>
                            <Col lg={6} className="no-padding">
                                <Image src= {material} className= "img-responsive" data-aos="fade-up-left"/>
                            </Col>
                        </Row>
                        <Row className="creation-process-item blue">
                            <Col lg={6} className="no-padding">
                                <Image src= {inkHolders} className= "img-responsive" data-aos="fade-up-right"/>
                            </Col>
                            <Col lg={6} className="ink-txt-card">
                                <h3>We craft in small production runs</h3>
                                <p>We strive to maintain the artistry and grace in <br />  traditional high-quality craftsmanship.</p>
                            </Col>
                        </Row>
                        <Row className="creation-process-item">
                            <Col lg={6} className="ink-txt-card">
                                <h3>We are involved from start to finish</h3>
                                <p>We source the wood. <br />
                                    We carve the ink holder. <br />
                                    We hand package the ink holder.</p>
                            </Col>
                            <Col lg={6} className="no-padding">
                                <Image src= {inkHolders} className= "img-responsive" data-aos="fade-up-left"/>
                            </Col>
                        </Row>
                        
                </section>       
            </div>
        )
    }
}

export default About;