import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Login = () => {

  document.title = "NC News | "

    return (
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-gallery-vector-icon-png-image_1027754.jpg" roundedCircle />
          </Col>
        </Row>
      </Container>
    );
}

export default Login

