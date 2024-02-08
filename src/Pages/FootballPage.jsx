import React from "react";
import { getArticles } from "../api";
import { useState, useEffect } from 'react';
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import ArticleCard from "../Components/Each_Article/ArticleCard";
import LoadingMessage from "../Components/Loading/LoadingMessage";



function FootballPage () {
    const [topicArticles, setTopicArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticles("football")
        .then((result) => {
            setTopicArticles(result)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err)
        })
    }, []);

    if (isLoading) return <LoadingMessage />

    return (
        <div>
            <Header />
            <NavBar />
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

export default FootballPage;