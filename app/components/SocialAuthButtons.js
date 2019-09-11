 
import React from 'react';
import styled from 'styled-components';
import InstagramIcon from 'images/instagram-icon.png';
import SnapchatIcon from 'images/snapchat-icon.png';
import TumblrIcon from 'images/tumblr-icon.png';
import YoutubeIcon from 'images/youtube-icon.png';

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 4
`;

const Img = styled.img`
 width: 35px;
 height: 35px;
 margin: 0 3px;
 display: block;
`



const SocialAuthButtons = () => {
    return (
        <Div>
            <Img src={SnapchatIcon} className="social-icon-small"/>
            <Img src={InstagramIcon} className="social-icon-small"/>
            <Img src={YoutubeIcon} className="social-icon-small"/>
            <Img src={TumblrIcon} className="social-icon-small"/>
        </Div>
    );
};

export default SocialAuthButtons