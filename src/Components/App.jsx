import Home from '../Pages/Home.jsx';
import Topic from '../Pages/Topic.jsx';
import Users from '../Pages/Users.jsx';
import SingleArticle from './Each_Article/SingleArticle.jsx';
import NoPage from '../Pages/NoPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from '../../context/userContext.jsx';
import TopicPage from '../Pages/TopicPage.jsx';


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
        <Route path="/" element={<Home />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/article/:id" element={<SingleArticle />} />
        <Route path="/article/topic/:topic" element={<TopicPage />} />
      </Routes>
      </UserContext.Provider>
    </div>
    
  )
}

export default App
