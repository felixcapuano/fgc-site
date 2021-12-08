const style = {
  position: 'fixed',
  width: '100%',
  height: '100vh',
  top: 0,
  left: 0,
  backgroundImage: `url(./images/background.jpg)`,
  backgroundPosition: 'top center',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  zIndex: -1,
};

const Background = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default Background;
