import Background from './Background';
import Header from './Header';
import Menu from './Menu';
import Tile from './Tile';
import { Container } from 'react-bootstrap';

const style = {
  'background-color': 'blue',
};

const App = () => {
  return (
    <div className='App' style={style}>
      <Background>
        <Header />
        <Menu />
        {/* <Container fluid>
        <Tile></Tile>
      </Container> */}
      </Background>
    </div>
  );
};

export default App;
