import Background from './Background';
import Header from './Header';
import Menu from './Menu';
import Tile from './Tile';
import { Container } from 'react-bootstrap';
import Gallery from './Gallery';
import Footer from './Footer';

import './css/fonts.css';

const appStyle = {
  fontFamily: 'mclaren, Arial, sans-serif',
  color: 'white',
};

const tilesStyle = {
  backgroundColor: '#2c2f33',
  borderRadius: '10px',
};

const App = () => {
  return (
    <div className='App' style={appStyle}>
      <Background />
      <Header />
      <Menu />
      <Container style={tilesStyle}>
        <Tile title='Voici quelques jeux auxquels nous jouons'>
          <Gallery />
        </Tile>
        <Tile title='Voici les évènements du moment' hidden />
        <Tile title='Voici nos plus fidèles donateurs' hidden />
        <Tile title='Voilà enfin comment nous contacter' />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
