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
    <Img src={TwitterIcon} className="social-icon-small" />
    <Img src={InstagramIcon} className="social-icon-small" />
    <Img src={YoutubeIcon} className="social-icon-small" />
    <Img src={FacebookIcon} className="social-icon-small" />
  </Div>
);

export default SocialAuthButtons;
