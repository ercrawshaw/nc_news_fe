import React from "react";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { patchArticleVote } from "../../api";

function UpdateArticleVotes ({currentArticle:{votes, article_id}}) {
    const [currentVote, setCurrentVote] = useState(votes)
    const [error, setError] = useState("")
    const [buttonPressed, setButtonPressed] = useState(false)
    const [buttonClass, setButtonClass] = useState("primary")

    function handleSubmit (event) {
        event.preventDefault();
        console.dir(event.target.className);

        if (buttonPressed === false) {
           setCurrentVote((currentVote) => currentVote+1)
            setError("")
            setButtonPressed(true)
            setButtonClass("secondary")
            patchArticleVote(article_id, 1).catch(() => {
            setError("Couldn't update article votes")
            setCurrentVote((currentVote) => currentVote-1)
            setButtonClass("primary")
        }) 
        }else{
            setCurrentVote((currentVote) => currentVote-1)
            setError("")
            setButtonPressed(false)
            setButtonClass("primary")
            patchArticleVote(article_id, -1).catch(() => {
                setError("Couldn't remove your vote")
                setCurrentVote((currentVote) => currentVote+1)
                setButtonClass("secondary")
            })
        }
        
    };
    
    return (
        <div>
        <Button variant={buttonClass} onClick={handleSubmit} >
          Vote <Badge bg="secondary">{currentVote}</Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>
        <p>{error}</p>
        </div>
      );

};

export default UpdateArticleVotes;