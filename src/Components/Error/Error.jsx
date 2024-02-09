import React from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function Error () {
    
        return (
          <Alert variant="danger" onClose={() => setShow(false)} >
            <Alert.Heading>Oh snap! Something went wrong!</Alert.Heading>
            <p>
              We're sorry for the inconvenience! Try again in a bit!
            </p>
            <Link to={`/home`}>
                <Button variant="primary">Back to Home</Button>
            </Link>
          </Alert>
        );
      };

export default Error;