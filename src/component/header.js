import React from "react";
import {Container, Row, Navbar, Nav, NavItem, NavDropdown} from "react-bootstrap";
import Logo from "../assets/images/Inksie.svg";


const Header = () => (
    <div>
        <Navbar bg="navbar-custom" expand="lg">
        <Container>
            <Navbar.Brand>
            <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="navbar-right">
                <Nav className="ml-auto">
                <Nav.Link href="#home">Shop</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
    </div>
)

export default Header;