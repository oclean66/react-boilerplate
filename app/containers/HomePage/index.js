/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Logo from '../../components/Logo';

import {Button} from '../../components/UI';
import InstagramIcon from '../../images/instagram-icon.png';
import SnapchatIcon from '../../images/snapchat-icon.png';
import TumblrIcon from '../../images/tumblr-icon.png';
import YoutubeIcon from '../../images/youtube-icon.png';

export default function HomePage(props) {
  const gotoLogin = (type) => {
    props.history.push(`/login/${type}`)
  }
  return (<>
    <Logo/>
    <div className="auth-container">
      <div className="social-auth-buttons">
        <img src={InstagramIcon} className="social-icon-small"/>
        <Button onClick={() => gotoLogin('entrepreneur')} style={{flex: 10}}><FormattedMessage {...messages.enterpreneursBtn} /></Button>
        <img src={SnapchatIcon} className="social-icon-small"/>
      </div>
      <div className="social-auth-buttons">
        <img src={TumblrIcon} className="social-icon-small"/>
        <Button  onClick={() => gotoLogin('investor')}  style={{flex: 10}}><FormattedMessage {...messages.investorBtn} /></Button>
        <img src={YoutubeIcon} className="social-icon-small"/>
      </div>
    </div>
  
     
  </>);
}
