import { Container } from 'react-bootstrap';
import './css/Gallery.css';

const importAll = (r) => r.keys().map(r);

const images = importAll(
  require.context('./images/games/', false, /\.(png|jpe?g|svg)$/)
);

const Gallery = () => {
  const showImage = (img) => {
    return (
      <div className='gallery-item' key={img.default}>
        <img className='gallery-image' src={img.default} alt='fail' />
      </div>
    );
  };

  return (
    <Container fluid className='gallery'>
      {images.map(showImage)}
    </Container>
  );
};

export default Gallery;
