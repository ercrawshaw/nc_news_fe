import { useEffect, useState } from "react";
import { getArticles } from "../api";
import SingleArticle from "../Components/SingleArticle";
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
                    
                    <SingleArticle className="cards"
                    singleArticle={singleArticle}
                    />
                    
                )
            })}
        </article>
    </section>
)

}

export default ArticlesList;