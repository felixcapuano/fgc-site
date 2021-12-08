import { Container } from 'react-bootstrap';
import './css/DiscordInvite.css';
import discordLogo from './images/discord-logo.gif';

const DiscordInvite = () => {
  return (
    <Container
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <div className='discord-invite'>
        <div className='discord-invite-body'>
          <div className='discord-invite-image'>
            <img
              src={discordLogo}
              alt='discord-logo'
              width='100%'
              height='100%'
            />
          </div>
          <div className='discord-invite-details'>
            <h3 className='discord-invite-name'>
              {/* <!--Uncomment if server is verified
                <div className="discord-invite-verified">
                    <svg className="discord-invite-verified-svg" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2"><path fill="currentColor" fill-rule="evenodd" d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"></path></svg>
                    <div className="discord-invite-verified-tick">
                        <svg className="discord-invite-verified-tick-svg" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2"><path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor"></path></svg>
                    </div>
                </div>
--> */}
              French Gamer Community 🔞
            </h3>
            <div className='discord-invite-counts'>
              <i className='discord-invite-status-icon discord-invite-online-icon'></i>
              <strong className='discord-invite-count'>X,XXX Online</strong>
              <i className='discord-invite-status-icon discord-invite-offline-icon'></i>
              <strong className='discord-invite-count'>Y,YYY Members</strong>
            </div>
          </div>
          <a
            type='button'
            className='discord-invite-join-button'
            href='https://discord.gg/89WR5a8cx9'
          >
            Join
          </a>
        </div>
      </div>
    </Container>
  );
};

export default DiscordInvite;
