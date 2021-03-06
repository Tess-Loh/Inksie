import React from "react";
import {Container, Row, Col, Navbar, Nav, NavItem, NavDropdown, Jumbotron, Button, Image} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../assets/images/Inksie.svg";

const text = 'Bandar Sungai Long 43200 <br>Kajang, Selangor';
const Footer = () => (
    <section className="footer">
        <Container>
            <Row >
                <Col lg={6}>
                    <p>Bandar Sungai Long<br />43200 Kajang, Selangor.<br />+06-1782029324<br />inksie@outlook.com</p>
                </Col>
                <Col lg={6} className="inksie-logo">
                    <Logo />
                </Col>
                <Col lg={12}>
                    <p className="copyright">Copyright@2020 Inksie</p>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Footer;