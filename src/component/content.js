import React from "react";
import {Container, Row, Col, Navbar, Nav, NavItem, NavDropdown, Jumbotron, Button, Image} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import brushes from "../assets/images/brushes.png";
import inkHolder from "../assets/images/ink-holder.png";
import bark from "../assets/images/bark.png";
import etsy from "../assets/images/etsy.png";
import stickerrific from "../assets/images/stickerrific.png";
import cziplee from "../assets/images/czip50.png";
import artFriend from "../assets/images/artfriend.png";
import hill from "../assets/images/man-hill.png";

class Content extends React.Component {
render(){
    const circleColors = ["#DFF3F4","#54744B","#250A00","#D54635"];
    const circlesToRender = circleColors.map((data,i) => (
        <svg key={i} height="100" width="100">
            <circle cx="50" cy="50" r="40" fill={data} />
        </svg>
    ));

    return(
        <div>
            <section className="hero-banner">
                <Jumbotron className="hero-banner-bg">
                    <Container>
                        <Row className="hero-banner-item">
                            <Col lg={6} >
                                <h2>Calligraphy Ink Holder</h2>
                                <h4>You can't top an exclusive design</h4>
                                <Button>Buy Now!</Button>
                            </Col>
                            <Col lg={6} className="hill-img">
                                <Image src= {hill} />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </section>
            
            <Container>
            <section className="brush-bg no-top-padding">
                <Row className="center-items">
                    <Col lg={12}>
                        <Image src= {brushes} width='80%'/>
                    </Col>
                    <Col lg={12}>
                        <Image src= {inkHolder} />
                    </Col>
                    <Col lg={8}>
                        <h1>Quality Product that Inspires Creative Flow</h1>
                        <p>Creative spirits require tools that gets their creative juices flowing. 
                            Inksie’s ink holder was tailored made for your workflow to be more efficient and streamlined.
                            Built from quality material that is not only durable but also eye candy for your desk. </p>
                    </Col>
                </Row>
            </section>
            <Col lg={12}>
                <hr />  
            </Col>
            </Container>
            <section >
                <Jumbotron className="inksie-explanation">
                    <Container className="top-padding">
                        <Row>
                            <Col lg={6}>
                                {circlesToRender}
                            </Col>
                            <Col lg={6}>
                                <p>Finish that thought in a clutter free desk with an ink holder that keeps your ink bottles close 
                                    to one another. Wave goodbye to your days of hunting for those tiny hard to find ink bottles instead 
                                    Inksie keeps you in your creative flow. Oh ya and SAY ADIOUS TO INK SPILLAGE</p>
                            </Col>
                            <Col lg={6}>
                                <p>Inksie's ink holder is made from Balau a dense hardwood native to Malaysia. The sturdy and hefty piece 
                                    is hand-crafted in small production runs to ensure consistency and quality control. Attractive and durable 
                                    it will be an eye-catching staple on your desk for years to come. </p>
                            </Col>
                            <Col lg={6}>
                                <Image src= {bark} />
                            </Col>
                        </Row>
                        <Row className="center-items">
                            <Col lg={12}>
                                <Image src= {etsy} />
                                <h5>Inksie Available in Etsy</h5>
                                <Button>Buy Now</Button>
                            </Col>
                        </Row>
                    </Container>
                
            </Jumbotron>
            </section>
            

            
            <Jumbotron className="clients-bg top-padding">
                <section className="top-padding">
                    <Row className="center-items">
                        <Col lg={12}>
                            <h3>Clients</h3>
                        </Col>
                        <Col lg={3}>
                            <Image src= {stickerrific} />
                        </Col>
                        <Col lg={3}>
                            <Image src= {cziplee} />
                        </Col>
                        <Col lg={3}>
                            <Image src= {artFriend} />
                        </Col>
                    </Row>
                </section>
            </Jumbotron>
            
    </div>
    )
    }
}


export default Content;