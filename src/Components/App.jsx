import Home from '../Pages/Home.jsx';
import Login from '../Pages/Login.jsx';
import Topic from '../Pages/Topic.jsx';
import Users from '../Pages/Users.jsx';
import SingleArticle from './Each_Article/SingleArticle.jsx';
import NoPage from '../Pages/NoPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from '../../context/userContext.jsx';
import FootballPage from '../Pages/FootballPage.jsx';
import CodingPage from '../Pages/CodingPage.jsx';
import CookingPage from '../Pages/CookingPage.jsx';


function App() {
  const [user, setUser] = useState({
    username: 'tickle122',
    name: 'Tom Tickle',
    avatar_url:
      'https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953'
  })
  return (
    
    <div>
      <UserContext.Provider value={{user}}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/article/:id" element={<SingleArticle />} />
        <Route path="/article/topic/football" element={<FootballPage />} />
        <Route path="/article/topic/coding" element={<CodingPage />} />
        <Route path="/article/topic/cooking" element={<CookingPage />} />
      </Routes>
      </UserContext.Provider>
    </div>
    
  )
}

export default App
