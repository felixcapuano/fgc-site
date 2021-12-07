import background from './images/background.jpg';

const style = {
  width: '100%',
  height: '100vh',
  top: 0,
  left: 0,
  backgroundImage: `url(${background})`,
  backgroundPosition: 'top center',
  zIndex: -1,
};

const Background = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default Background;
