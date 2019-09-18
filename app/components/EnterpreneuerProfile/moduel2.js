import React from 'react';
import InstagramIcon from 'images/instagram-icon.png';
import FacebookIcon from 'images/facebook-icon.png';
import YoutubeIcon from 'images/youtube-icon.png';
import TwitterIcon from 'images/twitter-icon.png';

const Modeuel2 = props => (
  <div className="Modeuel1border">
    <section className="moduel2head">
      <div onClick={() => props.setCountAction('three')} className="cancel">
        x
      </div>
      <h1>
        We<span style={{ color: '#1473bf' }}>P</span>itch Social Media
      </h1>
    </section>
    <section className="moduel2Social">
      <ul>
        <li>
          {' '}
          <img src={TwitterIcon} alt="" />
          Official We <span style={{ color: '#1473bf' }}> P</span>itch{' '}
        </li>
        <li>
          {' '}
          <img src={InstagramIcon} alt="" />
          Official We <span style={{ color: '#1473bf' }}> P</span>itch{' '}
        </li>
        <li>
          {' '}
          <img src={FacebookIcon} alt="" />
          Official We <span style={{ color: '#1473bf' }}> P</span>itch{' '}
        </li>
        <li>
          {' '}
          <img src={YoutubeIcon} alt="" />
          Official We <span style={{ color: '#1473bf' }}> P</span>itch{' '}
        </li>
      </ul>
    </section>
    <section className="moduel2Pages">
      <div>
        <h1>Checkout Our Main Pages</h1>
        <ul>
          <li>
            We<span style={{ color: '#1473bf' }}>P</span>
            itch.com/MostPopulerEmployees
          </li>
          <li>
            We<span style={{ color: '#1473bf' }}>P</span>
            itch.com/MostPopulerFounders
          </li>
        </ul>
        <h3>Verified Only</h3>
        <ul>
          <li>
            We<span style={{ color: '#1473bf' }}>P</span>
            itch.com/VerifiedEmployees
          </li>
          <li>
            We<span style={{ color: '#1473bf' }}>P</span>
            itch.com/VerifiedFounders
          </li>
        </ul>
      </div>
    </section>
  </div>
);

export default Modeuel2;
