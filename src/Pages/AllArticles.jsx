import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "../Components/Each_Article/ArticleCard";
import Header from "../Components/Header";
import '../App.css'

function ArticlesList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles()
        .then((res) => {
            setArticles(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }, []);

    
return (
    <section className="article-container">
        <article className="article-list">
            {articles.map((singleArticle) => {
                return (
                    
                    <ArticleCard className="cards"
                    singleArticle={singleArticle}
                    />
                    
                )
            })}
        </article>
    </section>
)

}

export default ArticlesList;