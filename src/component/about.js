import React from "react";
import {Container, Row, Col, Navbar, Nav, NavItem, NavDropdown, Jumbotron, Button, Image} from "react-bootstrap";
import material from "../assets/images/wood-material.jpg"
import inkHolders from "../assets/images/ink-holders.jpg"

const About = () =>(
    <div>
        <section className="about-us-section">
            <Container>
                <Row className="center-items">
                    <Col lg={10}>
                        <h2>About Us</h2>
                        <h4>Inksie is dedicated in handcrafting each and every ink holder with quality Balau wood, rejecting the pressure of mass production.</h4>
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
                        <Image src= {material} className= "img-responsive"/>
                    </Col>
                    <Col lg={6} className="no-padding">
                        <Image src= {inkHolders} className= "img-responsive"/>
                    </Col>
                    <Col lg={6} className="ink-txt-card">
                        <h3>We craft in small production runs</h3>
                        <p>We strive to maintain the artistry and grace in <br />  traditional high-quality craftsmanship.</p>
                    </Col>
                    <Col lg={6} className="ink-txt-card">
                        <h3>We are involved from start to finish</h3>
                        <p>We source the wood. <br />
                            We carve the ink holder. <br />
                            We hand package the ink holder.</p>
                    </Col>
                    <Col lg={6} className="no-padding">
                        <Image src= {inkHolders} className= "img-responsive"/>
                    </Col>
                </Row>
        </section>
                     
    </div>
)

export default About;