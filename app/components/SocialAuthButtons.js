import React from 'react';
import styled from 'styled-components';
import InstagramIcon from 'images/instagram-icon.png';
import FacebookIcon from 'images/facebook-icon.png';
import YoutubeIcon from 'images/youtube-icon.png';
import TwitterIcon from 'images/twitter-icon.png';

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 4;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin: 0 3px;
  display: block;
`;

const SocialAuthButtons = () => (
  <Div>
    <a href="https://twitter.com/?lang=en" target="_blank"><Img src={TwitterIcon} alt="" className="social-icon-small" /></a>  
    <a href="https://www.instagram.com/?hl=en" target="_blank"><Img src={InstagramIcon}  alt="" className="social-icon-small" /></a>
    <a href="https://www.youtube.com/" target="_blank"><Img src={YoutubeIcon} alt="" className="social-icon-small" /></a>
    <a href="https://www.facebook.com/" target="_blank"><Img src={FacebookIcon} alt="" className="social-icon-small" /></a>
  </Div>
);

export default SocialAuthButtons;
