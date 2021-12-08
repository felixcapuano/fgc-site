import background from './images/background1.jpg';

const style = {
  position: 'fixed',
  width: '100%',
  height: '100vh',
  top: 0,
  left: 0,
  backgroundImage: `url(${background})`,
  backgroundPosition: 'top center',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  zIndex: -1,
};

const Background = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default Background;
