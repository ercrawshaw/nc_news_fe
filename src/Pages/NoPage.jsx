import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../Components/UserContext';

const NoPage = () => {

  document.title = "NC News | No Page"



  return (
    <section>
        <h1>ERROR</h1>
    </section>
  )
}

export default NoPage