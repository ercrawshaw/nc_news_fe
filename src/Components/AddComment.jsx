import React from "react";
import { useEffect, useState, useContext } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { UserContext } from "../../context/userContext";
import { postNewComment } from "../api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";


function AddComment () {
    const {id} = useParams();
    const { user:{username, name, avatar_url} } = useContext(UserContext);
    const [commentBody, setCommentBody] = useState("");
    const [placholderBody, setPlaceholderBody] = useState("Insert comment...")
    const [message, setMessage] = useState("Post a Comment")

    function handleClick (event) {
        event.preventDefault()

        if (commentBody !== "") {
          const input = { username: username, body: commentBody }
          postNewComment(id, input)
          .then((result) => {
            setMessage("Comment loading")
            CommentCard(result).then(() => {
              console.log(result);
              setMessage("Comment uploaded!")

            })
            
          })
        }
        
        
    }

    return (
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{message}</Form.Label>
            <Form.Control as="textarea" rows={3} value={commentBody} placeholder={placholderBody} onChange={(e) => setCommentBody(e.target.value)}/>
            <Button type="submit" onClick={handleClick}>Submit Comment</Button>
          </Form.Group>
        </Form>
      );
    
};

export default AddComment;


// comment_id
// body 
// article_id
// author 
// votes
// created_at

//takes username and body
