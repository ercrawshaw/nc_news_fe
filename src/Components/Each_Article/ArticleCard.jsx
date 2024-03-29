import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import dateFormat from 'dateformat';




function ArticleCard({singleArticle}) {

    
  const formattedDate = dateFormat(singleArticle.created_at, "dS mmmm yyyy");

    return (
        <Card className="articleCard" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={singleArticle.article_img_url} />
          <Card.Body>
            <Card.Title>{singleArticle.title}</Card.Title>
          </Card.Body>
          <ListGroup className="article-info">
            <ListGroup.Item key="article-card-author">Author: {singleArticle.author}</ListGroup.Item>
            <ListGroup.Item key="article-card-topic">Topic: {singleArticle.topic}</ListGroup.Item>
            <ListGroup.Item key="article-card-date">{formattedDate}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Link to={`/article/${singleArticle.article_id}`}>
            <Button variant="primary">Read Article</Button>  
            </Link>
            
          </Card.Body>
        </Card>
      );
}

export default ArticleCard;