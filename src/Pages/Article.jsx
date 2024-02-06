import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../Components/UserContext';

const Article = () => {

  document.title = "NC News | Article"



  return (
    <section>
        <h1>Article</h1>
    </section>
  )
}

export default Article