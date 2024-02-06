import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



function SingleArticle({singleArticle}) {
    console.dir(singleArticle);
    return (
        <Card className="articleCard" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={singleArticle.article_img_url} />
          <Card.Body>
            <Card.Title>{singleArticle.title}</Card.Title>
          </Card.Body>
          <ListGroup className="article-info">
            <ListGroup.Item>Author: {singleArticle.author}</ListGroup.Item>
            <ListGroup.Item>Topic: {singleArticle.topic}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Read Article</Card.Link>
          </Card.Body>
        </Card>
      );
}

export default SingleArticle;