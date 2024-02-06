import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import { useEffect } from 'react';



function NavBar () {
    const [category, setCategory] = useState('All')

    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="navbar-links"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/article">All</Nav.Link>
            <Nav.Link href="/article">Football</Nav.Link>
            <Nav.Link href="/article">Coding</Nav.Link>
            <Nav.Link href="/article">Cooking</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};

export default NavBar;