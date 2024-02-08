import React from "react";
import Header from "../Header";
import NavBar from "../NavBar";
import DisplayArticle from "./DisplayArticle";
import Comments from "./Comments/Comments";

function SingleArticle () {
    return (
        <div className='Article'>
          <Header />
          <NavBar />
          <DisplayArticle />
          <Comments />
    
        </div>
      )
};

export default SingleArticle;