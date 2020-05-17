import React from "react";
import {Container, Row, Col, Navbar, Nav, NavItem, NavDropdown, Jumbotron, Button, Image} from "react-bootstrap";
import {CopyToClipboard} from 'react-copy-to-clipboard';

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

    mouseOut(e) {
        this.setState({copied: false})
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
                                <CopyToClipboard text={this.state.value}
                                onCopy={() => this.setState({copied: true})}
                                onMouseLeave={e => this.mouseOut(e)}
                                >
                                <div className="email-details">
                                    <span className="icon-email"></span>
                                    <h4>inksie@outlook.com</h4>
                                    {/* <span className="tooltip-onClick">Inksie's email address has been copied to you clipboard</span> */} 
                                </div>
                                </CopyToClipboard>
                                <div className="tool-tip">
                                    {this.state.copied ? <span className="tooltip-onClick">Inksie's email address has been copied to you clipboard</span> : null}
                                </div>
                            </Col>
                            
                            <Col lg={6}>
                                <a href="tel:06-1782029324" className="phone-details">
                                    <span className="icon-phone"></span>
                                    <h4>+06-1782029324</h4>
                                </a>
                                
                            </Col>
                            




                        </Row>
                    </Container>
                </section>
            </div>
        )
    }
}



export default Contact;