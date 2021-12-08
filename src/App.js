import Background from './Background';
import Header from './Header';
import Menu from './Menu';
import Tile from './Tile';
import { Container, Col, Row } from 'react-bootstrap';
import Gallery from './Gallery';
import Footer from './Footer';

import './firebase';
import './css/App.css';

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
      <Container fluid style={{ padding: '0px' }}>
        <Col
          md={{ span: 10, offset: 1 }}
          xl={{ span: 8, offset: 2 }}
          xxl={{ span: 6, offset: 3 }}
          style={tilesStyle}
        >
          <Tile title='Voici quelques jeux auxquels nous jouons' hidden>
            <Gallery />
          </Tile>
          <Tile title='Voici les évènements du moment' hidden />
          <Tile title='Voici nos plus fidèles donateurs' hidden />
          <Tile title='Voilà enfin comment nous contacter' hidden/>
        </Col>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
