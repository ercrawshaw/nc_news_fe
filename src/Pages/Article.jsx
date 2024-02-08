import React from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import ShowArticle from "../Components/ShowArticle";
import ShowArticleComments from "../Components/ShowArticleComments";
import AddComment from "../Components/AddComment";


function Article () {
  return (
    <div className='Article'>
      <Header />
      <NavBar />
      <ShowArticle />
      <AddComment />
      <ShowArticleComments />

    </div>
  )
};

export default Article;