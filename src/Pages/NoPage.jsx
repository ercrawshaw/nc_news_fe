import React from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


const NoPage = () => {
  return (
    <section>
        <Header />
        <NavBar />
        <Card>
          <h1>No Such Page</h1>
        <Card.Body>
        <Card.Title>We're sorry, this page doesn't exist</Card.Title>
        <Card.Text>
          If you'd like to go somewhere else on our site choose somewhere on the navigation bar or click the home button below.
        </Card.Text>
        <Link to={`/home`}>
        <Button variant="primary">Home</Button>
        </Link>
      </Card.Body>
    </Card>
    </section>
  )
}

export default NoPage