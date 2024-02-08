import React from "react";
import AddComment from "./AddComment";
import { useEffect, useState } from "react";
import { getCommentsById } from "../../../api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";


function Comments () {
    const [comments, setComments] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getCommentsById(id)
        .then((res) => {
            setComments(res)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div className="comments">
            <AddComment setComments={setComments} comments={comments} />
            <article className="comment-list">
                {comments.map((singleComment) => {
                    return (
                        
                        <CommentCard className="comment-cards"
                        singleComment={singleComment} 
                        setComments={setComments}
                        comments={comments}
                        />
                        
                    )
                })}
            </article>
        </div>
    )

};

export default Comments;