import React from "react";
import { useParams } from "react-router-dom";
import { getArticlesById } from "../api";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import VoteArticle from "./VoteArticle";
import dateFormat from 'dateformat';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';


function ShowArticle () {
    const {id} = useParams();
    const [currentArticle, setCurrentArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    

    useEffect(() => {
        getArticlesById(id)
        .then((res) => {
            setCurrentArticle(res)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err)
        })
    }, []);

    if (isLoading === true) return <p>Page is Loading...</p>

    const date = currentArticle.created_at
    const formattedDate = dateFormat(date, "dS mmmm yyyy")

    
    
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
                    <VoteArticle currentArticle={currentArticle} />
                </Col>
            </Row>
        </Container>
        
      );

};

export default ShowArticle;