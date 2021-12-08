import { Row } from 'react-bootstrap';

const titleStyle = {
  padding: '8px',
  margin: '0px 0px 0px 0px',
};

const Tile = ({ title, hidden, children }) => {
  return (
    <Row style={titleStyle} hidden={hidden}>
      <h2 style={titleStyle}>{title}</h2>
      {children}
    </Row>
  );
};

export default Tile;
