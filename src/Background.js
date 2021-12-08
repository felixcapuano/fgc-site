import { Image } from 'react-bootstrap';
import background from './images/background.jpg';

const style = {
  position: 'fixed',
  height: '100vh',
  width: '100%',
  top: 0,
  left: 0,
  objectFit: 'cover',
  // position: 'top center',

  zIndex: -1,
  // backgroundImage: `url(./images/background.jpg)`,
  // backgroundPosition: 'top center',
  // backgroundSize: '100%',
  // backgroundRepeat: 'no-repeat',
};

const Background = ({ children }) => {
  // return <div style={style}>{children}</div>;
  return (
    <Image src={background} style={style}>
      {children}
    </Image>
  );
};

export default Background;
