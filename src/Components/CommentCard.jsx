import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import dateFormat from 'dateformat';
import { useEffect, useState } from "react";

function CommentCard ({singleComment}) {
    const [commentCount, setCommentCount] = useState()
    const date = singleComment.created_at
    const formattedDate = dateFormat(date, "dS mmmm yyyy")

    

    return (
        <Card>
          <Card.Header>{singleComment.author}</Card.Header>
          <Card.Body>
            <blockquote>
              <p>
                {' '}
                {singleComment.body}
                {' '}
              </p>
              <footer>
                <cite>{formattedDate}</cite>
              </footer>
            </blockquote>
          </Card.Body>
          <Modal.Footer>
          <p>{singleComment.votes}</p>
          <Button variant="primary">Upvote</Button>
        </Modal.Footer>
        </Card>
      );
};

export default CommentCard;