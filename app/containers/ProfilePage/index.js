/**
 *
 * ProfilePage
 *
 */

import React from 'react';
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
import EntProfile from '../../components/EnterpreneuerProfile/entProfile';

import Modeuel2 from '../../components/EnterpreneuerProfile/moduel2';
import Bitmap from '../../images/Bitmap.png';
import Bitmap2 from '../../images/Bitmap2.png';
import Bitmap3 from '../../images/Bitmap3.png';
import Notification from '../../images/Notification.png';
import BrugerMenu from '../../components/BurgerMenu';

export function ProfilePage(props) {
  useInjectReducer({ key: 'profilePage', reducer });
  useInjectSaga({ key: 'profilePage', saga });

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
      {/* <Button onClick={() => props.dispatch(logoutAction())}>
          <FormattedMessage {...messages.logout} />
        </Button> */}

      <section className="moduel1Content">
            <Modeuel1/>
        {/* <Modeuel2/> */}
        {/* <Modeueli1/> */}
        {/* <Entupload /> */}
        {/* <EntProfile/> */}
      </section>
      <footer>
        <div>
          <div className="dropup">
            <button className="dropbtn">
              <img src={Bitmap2} alt="" />
            </button>
            <div className="dropup-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
            </div>
          </div>
          <div className="dropup">
            <button className="dropbtn">
              <img
                style={{ height: '25px', marginTop: '4px' }}
                src={Bitmap3}
                alt=""
              />
            </button>
            <div className="dropup-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
            </div>
          </div>
          <div className="dropup">
            <button className="dropbtn">
              <img src={Bitmap} alt="" />
            </button>
            <div className="dropup-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
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
