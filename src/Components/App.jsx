import Home from '../Pages/Home.jsx';
import Article from '../Pages/Article.jsx';
import Login from '../Pages/Login.jsx';
import Topic from '../Pages/Topic.jsx';
import Users from '../Pages/Users.jsx';
import AllArticles from '../Pages/AllArticles.jsx';
import NoPage from '../Pages/NoPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import UserContext from './UserContext.jsx';
import { useState } from 'react';


function App() {
  const [user, setUser] = useState({ username: "Ant", avatar_url: "https://images.prismic.io/northcoders/da9de623-e356-435a-92d6-421966a17898_ant-coding-bootcamp-tutor.jpg", kudos: 0 })
  return (
    <div>
      <UserContext.Provider value={{user}}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/article" element={<Article />}/>
        <Route path="/" element={<Login />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default App
