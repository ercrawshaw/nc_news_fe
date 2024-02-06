import { useState } from 'react';
import { useEffect } from 'react';
import ArticleCards from '../Components/ArticleCards';
import Container from 'react-bootstrap/Container';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../Components/UserContext';
import ArticlesList from './AllArticles';


const Home = () => {
  

  return (
    <div className='Home'>
      <Header />
      <NavBar />
      
      <ArticlesList />
     

    </div>
  )
}

export default Home