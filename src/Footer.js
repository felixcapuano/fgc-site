import '@fortawesome/fontawesome-free/css/all.css';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '15px',
  textAlign: 'center',
  // background: 'yellow',
  height: '10rem',
  fontFamily: '"avenir light", Arial, sans-serif',
};

const textStyle = {
  color: 'whitesmoke',
};

const socialStyle = {
  fontSize: '2rem',
  // background: 'red',
  padding: '0px 0px 10px 0px',
};

const iconStyle = {
  padding: '10px',
};

const Footer = () => {
  return (
    <div style={style}>
      <div>
        <div style={socialStyle}>
          <i style={iconStyle} className='fab fa-discord'></i>
          <i style={iconStyle} className='fab fa-github'></i>
        </div>
        <p style={textStyle}>
          © 2023 par French Gamer Community. Créé par Mammoth.
        </p>
      </div>
    </div>
  );
};

export default Footer;
