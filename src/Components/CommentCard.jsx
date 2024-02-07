import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import dateFormat from 'dateformat';
import { patchCommentVote } from "../api";
import { useEffect, useState } from "react";

function CommentCard ({singleComment}) {
    const {comment_id , votes} = singleComment;
    const [commentCount, setCommentCount] = useState(votes);
    const date = singleComment.created_at;
    const formattedDate = dateFormat(date, "dS mmmm yyyy");

    function handleClick (event) {
        event.preventDefault()

        if (event.target.id === 'upvote') {
            setCommentCount((currentCount) => currentCount + 1)
            patchCommentVote(comment_id)
        }else{
            setCommentCount((currentCount) => currentCount - 1)   
            patchCommentVote(comment_id)
        }
    };

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
          <p>{commentCount}</p>
          <Button id="upvote" onClick={handleClick} variant="primary">Upvote</Button>
          <Button onClick={handleClick} variant="secondary">Down vote</Button>
        </Modal.Footer>
        </Card>
      );
};

export default CommentCard;