import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router";


function NavBar () {
    const [category, setCategory] = useState('All');
    const {pathname} = useLocation();
    let location = pathname.split("/")[pathname.split("/").length-1].toUpperCase();
    const regex = /[0-9]/;
  
    if (location.match(regex)) {
      location = "ARTICLE"
    };

    if (location === "*") {
      location = "ERROR"
    }

    const validLocations = ['HOME', 'ARTICLE', 'CODING', 'FOOTBALL', 'COOKING', 'ERROR', 'USERS'];

    if (!validLocations.includes(location)) {
      location = "ERROR"
    }


    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>{location}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="navbar-links"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/article/topic/football">Football</Nav.Link>
            <Nav.Link href="/article/topic/coding">Coding</Nav.Link>
            <Nav.Link href="/article/topic/cooking">Cooking</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};

export default NavBar;