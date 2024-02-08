import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "../Components/Each_Article/ArticleCard";
import '../App.css';
import LoadingMessage from "../Components/Loading/LoadingMessage";

function ArticlesList() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticles()
        .then((res) => {
            setArticles(res)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err)
        })
    }, []);

    if (isLoading) return <LoadingMessage />

    
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