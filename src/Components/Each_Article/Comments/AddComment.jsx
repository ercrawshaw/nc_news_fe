import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../../context/userContext";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { postNewComment } from "../../../api";

function AddComment ({comments, setComments}) {
    const {id} = useParams();
    const { user:{username, name, avatar_url} } = useContext(UserContext);
    const [commentBody, setCommentBody] = useState("");
    const [placholderBody, setPlaceholderBody] = useState("Insert comment...")
    const [message, setMessage] = useState("Post a Comment")
    const [errorMessage, setErrorMessage] = useState("")

    function handleClick (event) {
        event.preventDefault()

        console.log(comments, "original");

        if (commentBody === "") {
          setErrorMessage("You need to write a comment")
        }

        if (commentBody !== "") {
          setErrorMessage("")
          const input = { username: username, body: commentBody }
          postNewComment(id, input)
          .then((result) => {
            setComments(comments => [...comments, result])
            console.log(comments);
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
            <p>{errorMessage}</p>
            <Button type="submit" onClick={handleClick}>Submit Comment</Button>
          </Form.Group>
        </Form>
      );
};

export default AddComment;