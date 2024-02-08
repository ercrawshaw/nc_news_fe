import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticlesById } from "../../api";
import dateFormat from 'dateformat';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import UpdateArticleVotes from "./UpdateArticleVotes";
import { Navigate } from "react-router-dom";

function DisplayArticle () {
    const {id} = useParams();
    const [currentArticle, setCurrentArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {
        getArticlesById(id)
        .then((res) => {
            setCurrentArticle(res)
            setIsLoading(false)
        })
        .catch((err) => {
            setError(true)
        })
    }, []);

    if (error) {
        return <Navigate to="*" replace={true} />
    }

    if (isLoading === true) return <p>Page is Loading...</p>

   
    const formattedDate = dateFormat(currentArticle.created_at, "dS mmmm yyyy");

    return (
        <Container> 
            <Row>
                <Col>
                    <h1>{currentArticle.title}</h1>
                </Col>
            </Row>
            <Row>
                <Col md={4}>{formattedDate}</Col>
            </Row>
            <Row>
                <Image src={currentArticle.article_img_url} fluid />    
            </Row>
            <Row>
                <Col md={1}>{currentArticle.author}</Col>
            </Row>
            <Row>
                <Col>
                    <p>{currentArticle.body}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <UpdateArticleVotes currentArticle={currentArticle} />
                </Col>
            </Row>
        </Container>
        
      );

};

export default DisplayArticle;