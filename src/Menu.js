import { Container } from 'react-bootstrap';
import DiscordInvite from './DiscordInvite';

const menuStyle = {
  padding: '0px',
  height: '83vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

const titleStyle = {
  fontWeight: 'bold',
  fontSize: '5rem',
  letterSpacing: '3px',
  margin: '0px 0px 0px 0px',
  textShadow: '2px 2px black'
};

const subtitleStyle = {
  fontSize: '30px',
  margin: '0px 0px 100px 0px',
  textShadow: '2px 2px black'
};

const highlightStyle = {
  color: '#7289da',
  // textDecoration: 'underline',
  fontWeight: 'bold',
};

const Menu = () => {
  return (
    <Container fluid style={menuStyle}>
      <div style={{backgroundColor: ''}}>
        <h1 style={titleStyle}>FRENCH GAMER COMMUNITY</h1>
        <h2 style={subtitleStyle}>
          La communauté française
          <span style={highlightStyle}> multi-gaming</span> sur discord!
        </h2>
        <DiscordInvite />
      </div>
    </Container>
  );
};

export default Menu;
