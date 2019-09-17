import React from 'react';
import { Button } from 'components/UI';
import Star from 'images/Star.png';
import InstagramIcon from 'images/instagram-icon.png';
import FacebookIcon from 'images/facebook-icon.png';
import YoutubeIcon from 'images/youtube-icon.png';
import TwitterIcon from 'images/twitter-icon.png';
import Tumbler from 'images/tumblr-icon.png';
import Snapchat from 'images/snapchat-icon.png';
import Dummy from 'images/Dummy.png';
import IntroVid from './introvid';

const EntProfile = () => (
  <div>
    <section className="mainCnt">
      <div className="picUpload">
        {' '}
        <img src={Dummy} alt="" />
      </div>
      <div className="socialLeft">
        <ul>
          <li>
            <img src={FacebookIcon} alt="" />
          </li>
          <li>
            <img src={TwitterIcon} alt="" />
          </li>
          <li>
            <img src={InstagramIcon} alt="" />
          </li>
          <li>
            <img src={YoutubeIcon} alt="" />
          </li>
          <li>
            <img src={Tumbler} alt="" />
          </li>
          <li>
            <img src={Snapchat} alt="" />
          </li>
          <li>
            <img src="" alt="" />
          </li>
        </ul>
      </div>
      <div className="StarCount">
        <h2 style={{ float: 'left' }}>Mighty Key</h2>{' '}
        <h2 style={{ float: 'right' }}>
          <img src={Star} alt="" /> 0
        </h2>
      </div>
      <div className="SubBtn">
        <Button>Click To See My Sub Prices</Button>
      </div>
      <div className="aboutProfile">
        <h3>My Stats</h3>
        <h2>About Me</h2> <h3>Intro Video</h3>
        {/* <p>Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic</p> */}
        <IntroVid />
      </div>
    </section>
  </div>
);
export default EntProfile;
