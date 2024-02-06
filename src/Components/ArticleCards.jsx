import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ArticleCards ({articles}) {

    articles.forEach((article) => {
        console.log(article.title);

        return (
            <section>
                Hello
            </section>
        )
    })
    
};

export default ArticleCards;