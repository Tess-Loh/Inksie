import React from "react";
import {Container, Row, Navbar, Nav, NavItem, NavDropdown} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import Logo from "../assets/images/Inksie.svg";


const Header = () => (
    <div>
        <Navbar bg="navbar-custom" expand="lg">
        <Container>
            <Navbar.Brand>
                <NavLink to="/"><Logo /></NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="navbar-right">
                <Nav className="ml-auto">
                <NavLink to="#shop">Shop</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
    </div>
)

export default Header;