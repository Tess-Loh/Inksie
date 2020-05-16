import React from "react";
import {Container, Row, Col, Navbar, Nav, NavItem, NavDropdown, Jumbotron, Button, Image} from "react-bootstrap";
import {CopyToClipboard} from 'react-copy-to-clipboard';

// const Contact = () => (
//     <div className="contact">
//         <section className="contact-section">
//             <Container>
//                 <Row className="contact-details center-items">
//                     <Col lg={8} className="padding-bottom contact-details">
//                         <h2>Get In Touch</h2>
//                         <h4>Need help? Contact us anytime via email or call us from 
//                         10am - 6pm, Mon-Fri GMT+8.</h4>
//                     </Col>
//                     <Col lg={6}>
//                         <span className="icon-email"></span>
//                         <h4>inksie@outlook.com</h4>
//                     </Col>
//                     <Col lg={6}>
//                         <span className="icon-phone"></span>
//                         <h4>+06-1782029324</h4>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     </div>
// )

class Contact extends React.Component {
    // state = {
    //     value: 'inksie@outlook.com',
    //     copied: false
    // };
    constructor(props){
        super(props);
        this.state = {
            value: 'inksie@outlook.com',
            copied: false
        }
    }

    render(){
        return(
            <div className="contact">
                <section className="contact-section">
                    <Container>
                        <Row className="contact-details center-items">
                            <Col lg={8} className="padding-bottom contact-details">
                                <h2>Get In Touch</h2>
                                <h4>Need help? Contact us anytime via email or call us from 
                                10am - 6pm, Mon-Fri GMT+8.</h4>
                            </Col>
                            <Col lg={6}>
                                <span className="icon-email"></span>
                                <h4>inksie@outlook.com</h4>
                            </Col>
                            <Col lg={6}>
                                <span className="icon-phone"></span>
                                <h4>+06-1782029324</h4>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        )
    }
}

export default Contact;