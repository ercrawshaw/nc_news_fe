import React from "react";
import { useState, useEffect } from 'react';
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import ArticleCard from "../Components/Each_Article/ArticleCard";
import LoadingMessage from "../Components/Loading/LoadingMessage";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { getArticlesByTopic } from "../api";
import { useLocation } from "react-router";
import NoPage from "./NoPage";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { getArticles } from "../api";


function TopicPage () {
    const [topicArticles, setTopicArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [sortBy, setSortBy] = useState("created_at");
    const [orderBy, setOrderBy] = useState("created_at DESC")
    const [buttonName, setButtonName] = useState("Date")
    const [order, setOrder] = useState("DESC")

    

    const {pathname} = useLocation();
    const topic = pathname.split("/")[pathname.split("/").length-1];

    function handleClick (e) {
        setButtonName(e.target.name)
        setSortBy(e.target.id)
    };

    function handleToggle (e) {
        setOrder(e.target.innerText)
    }

    useEffect (() => {
        if (sortBy === "comment_count") {
            getArticles(topic)
            .then((result) => {
                if (order === "ASC") {
                    result.sort((a,b) => a.comment_count - b.comment_count);
                    setTopicArticles(result)
                }else{
                    result.sort((a,b) => b.comment_count - a.comment_count)
                }
            })
        };

        if (sortBy !== "comment_count") {
            getArticlesByTopic({topic:topic, sortBy:sortBy, orderBy:order} )
            .then((result) => {
                setTopicArticles(result)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })  
        }
    }, [sortBy, order]);

    

   if (isLoading) {
    return <LoadingMessage />
   }else if (!isLoading && topicArticles.length === 0) {
    return <NoPage />
   }


    return (
        <div>
            <Header />

            <NavBar />

            <p>Sort By:</p>
            <Dropdown as={ButtonGroup}>
            <Button variant="success">{buttonName}</Button>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
    
             <Dropdown.Menu>
            <Dropdown.Item onClick={handleClick} id="created_at" name="Date">Date</Dropdown.Item>
            <Dropdown.Item onClick={handleClick} id="votes" name="Votes">Votes</Dropdown.Item>
            <Dropdown.Item onClick={handleClick} id="comment_count" name="Comments">Comments</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton onClick={handleToggle} id="DESC" value={1}>
                DESC
                </ToggleButton>
                <ToggleButton onClick={handleToggle}id="ASC" value={2}>
                ASC
                </ToggleButton>
            </ToggleButtonGroup>

            

            <article className="topic-article-list">
            {topicArticles.map((singleArticle) => {
                return (
                    
                    <ArticleCard className="cards"
                    singleArticle={singleArticle}
                    />
   
                )})}
            </article>
        </div>
    )
};

export default TopicPage;