import React from "react";
import { useEffect, useState, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { patchCommentVote } from "../../../api";

function UpdateCommentVote ({comments, setComments, singleComment}) {
    const {comment_id , votes} = singleComment;
    const [commentCount, setCommentCount] = useState(votes);
    const [error, setError] = useState("")

    function handleClick (event) {
        event.preventDefault()

        if (event.target.id === 'upvote') {
            setCommentCount((currentCount) => currentCount + 1)
            setError("")
            patchCommentVote(comment_id, 1)
            .catch(()  => {
              setError("couldn't increase vote")
              setCommentCount((currentCount) => currentCount-1)
            })
        }else{
            setCommentCount((currentCount) => currentCount - 1)
            setError("")   
            patchCommentVote(comment_id, -1)
            .catch(() => {
              setError("couldn't reduce vote")
              setCommentCount((currentCount) => currentCount+1)
            })
        }
    };

    return (
        <Modal.Footer>
        <p>{commentCount}</p>
        <Button id="upvote" onClick={handleClick} variant="primary">Upvote</Button>
        <Button onClick={handleClick} variant="secondary">Down vote</Button>
        
        <p>{error}</p>
      </Modal.Footer>
    )

};

export default UpdateCommentVote;