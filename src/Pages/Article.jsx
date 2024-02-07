import React from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import ShowArticle from "../Components/ShowArticle";
import ShowArticleComments from "../Components/ShowArticleComments";


function Article () {
  return (
    <div className='Article'>
      <Header />
      <NavBar />
      <ShowArticle />
      <ShowArticleComments />

    </div>
  )
};

export default Article;