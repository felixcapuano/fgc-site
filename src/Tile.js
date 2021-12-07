import { Col, Row } from 'react-bootstrap';

const style = {
  'background-color': 'yellow',
};

const Tile = () => {
  return (
    <Row>
      <Col>
        <h1>title</h1>
        <h2>description</h2>
        {/* composant */}
      </Col>
    </Row>
  );
};

export default Tile;
