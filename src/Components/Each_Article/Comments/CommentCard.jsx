import React from "react";
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import dateFormat from 'dateformat';
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../../../context/userContext";
import UpdateCommentVote from "./UpdateCommentVotes";
import DeleteComment from "./DeleteComment";


function CommentCard ({singleComment, comments, setComments},) {

  
    const {id} = useParams();
    const { user:{username} } = useContext(UserContext);
    const date = singleComment.created_at;
    const formattedDate = dateFormat(date, "dS mmmm yyyy");

    
    return (
        <Card className="comment_card">
          <Card.Header>{singleComment.author}
          </Card.Header>
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
           <UpdateCommentVote 
           comments={comments} 
           setComments={setComments} 
           singleComment={singleComment} />
           <DeleteComment 
           comments={comments} 
           setComments={setComments}
           singleComment={singleComment} />
        </Modal.Footer>
        </Card>
      );

};

export default CommentCard