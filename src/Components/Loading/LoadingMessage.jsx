import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

function LoadingMessage () {
    return (
        <div>
        
        <h1>Page is Loading...</h1>

        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      
        </div>
      );
};

export default LoadingMessage;