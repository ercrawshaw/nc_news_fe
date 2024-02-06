import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../Components/UserContext';
import { log } from 'console';

const Login = () => {

  document.title = "NC News | Login"

  const loggedInUser = useContext(UserContext);

  

  const navigate = useNavigate()

  return (
    <section>
        <h1>Log In</h1>
    </section>
  )
}

export default Login

