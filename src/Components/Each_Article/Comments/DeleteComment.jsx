import React from "react";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../../../context/userContext";
import Button from 'react-bootstrap/Button';
import { deleteComment } from "../../../api";




function DeleteComment ({comments, setComments, singleComment}) {
    const { user:{username} } = useContext(UserContext);
    const [commentDeleted, setCommentDeleted] = useState(null);
    

    function handleClick(event) {
        setCommentDeleted(true);
        deleteComment(singleComment.comment_id)
        .catch(() => {
            setCommentDeleted(false);
          });
    };


    if (commentDeleted) {
        return (
          <div className="comment-card">
            <span>Comment Deleted!</span>
          </div>
        );
      }

    if(singleComment.author === username) {
        return <Button onClick={handleClick} variant="danger"  >
        Delete
      </Button>
    }
    
};

export default DeleteComment;