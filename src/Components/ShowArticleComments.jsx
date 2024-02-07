import React from "react";
import { useParams } from "react-router-dom";
import { getCommentsById } from "../api";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";

function ShowArticleComments () {
    const {id} = useParams();
    const [comments, setComments] = useState([]);

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
        <section className="comment-container">
            <article className="comment-list">
                {comments.map((singleComment) => {
                    return (
                        
                        <CommentCard className="comment-cards"
                        singleComment={singleComment}
                        />
                        
                    )
                })}
            </article>
        </section>
    )

};

export default ShowArticleComments;