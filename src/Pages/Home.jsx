import Header from '../Components/Header';
import NavBar from '../Components/NavBar';


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