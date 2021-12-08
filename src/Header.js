import { Container } from 'react-bootstrap';
import logo from './images/logo-test.png';

const headerStyle = {
  display: 'flex',
  padding: '1rem',
  height: '12vh',
  alignItems: 'center',
};

const titleStyle = {
  fontWeight: 'bold',
  fontSize: '60px',
};

const Header = () => {
  return (
    <Container fluid style={headerStyle}>
      <img src={logo} width='100' height='100' alt='fgc-logo' />
      <h1 style={titleStyle}>FGC</h1>
    </Container>
  );
};

export default Header;
