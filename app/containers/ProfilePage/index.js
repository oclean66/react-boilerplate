/**
 *
 * ProfilePage
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Button } from 'components/UI';
import makeSelectProfilePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { logoutAction } from './actions';
import Logo from '../../components/Logo';
import Modeuel1 from '../../components/EnterpreneuerProfile/moduel1';
import Modeueli1 from '../../components/InvestorProfile/modueli1';
import Entupload from '../../components/EnterpreneuerProfile/entUpload';
import InvUpload from '../../components/InvestorProfile/invUpload';
import EntProfile from '../../components/EnterpreneuerProfile/entProfile';
import Modeuel2 from '../../components/EnterpreneuerProfile/moduel2';
import Bitmap from '../../images/Bitmap.png';
import Bitmap2 from '../../images/Bitmap2.png';
import Bitmap3 from '../../images/Bitmap3.png';
import FileIcon from '../../images/folder.png';
import Notification from '../../images/Notification.png';
import BrugerMenu from '../../components/BurgerMenu';

export function ProfilePage(props) {
  useInjectReducer({ key: 'profilePage', reducer });
  useInjectSaga({ key: 'profilePage', saga });
  const [count, setCount] = useState('first');
  return (
    <div className="cnt">
      <header>
        <div className="BrugerMenu">
          <BrugerMenu />
        </div>
        <Logo />
        <div className="notificationIcon">
          <img src={Notification} alt="" />
        </div>

        <div>
          <div id="nav">
            <ul>
              <li>
                <a href="#home">Top 5</a>
              </li>
              <li>
                <a href="#news">Videos</a>
              </li>
              <li>
                <a href="#contact">Albums</a>
              </li>
              <li>
                <a href="#about">Goals</a>
              </li>
              <li>
                <a href="#about">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <section className="moduel1Content">
        {props.match.params.type === 'entrepreneur'
          ? count == 'first' && <Modeuel1 setCountAction={setCount} />
          : count == 'first' && <Modeueli1 setCountAction={setCount} />}
        {count == 'second' && <Modeuel2 setCountAction={setCount} />}
        {count == 'three' && <Entupload setCountAction={setCount} />}
        {count == 'four' && <EntProfile />}

        {count == 'secondi' && <InvUpload />}
      </section>
      <footer>
        <div>
          <div className="dropup">
            <button className="dropbtn">
              <img src={Bitmap2} alt="" />
            </button>
            <div className="dropup-content">
              <a href="#">
                <img src={Bitmap2} alt="" />
                <h3>Take A Live Photo</h3>
              </a>
              <a href="#">
                <img src={FileIcon} alt="" />
                <h3>Choose A Photo From your Device</h3>
              </a>
            </div>
          </div>
          <div className="dropup">
            <button className="dropbtn">
              <img src={Bitmap3} alt="" />
            </button>
            <div className="dropup-content">
              <a href="#">
                <img src={Bitmap3} alt="" />
                <h2 />
                Take A Live Video
              </a>
              <a href="#">
                <img src={FileIcon} alt="" />
                <h3>Choose A Video From your Device</h3>
              </a>
            </div>
          </div>
          <div className="dropup">
            <button className="dropbtn">
              <img src={Bitmap} alt="" />
            </button>
            <div className="dropup-content">
              <a href="#">Start A Live Stream </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

ProfilePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profilePage: makeSelectProfilePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProfilePage);
