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
import makeSelectProfilePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Button } from 'components/UI';
import { logoutAction } from './actions';
import Logo from '../../components/Logo';

export function ProfilePage(props) {
  useInjectReducer({ key: 'profilePage', reducer });
  useInjectSaga({ key: 'profilePage', saga });

  return (
    <div className="cnt">
    <Logo />
      <div>
        <div id="nav">
          <ul>
            <li><a href="#home">Top 5</a></li>
            <li><a href="#news">Videos</a></li>
            <li><a href="#contact">Albums</a></li>
            <li><a href="#about">Goals</a></li>
            <li><a href="#about">Contact</a></li>
          </ul>
        </div>
      </div>
      <div>
        <Button onClick={() => props.dispatch(logoutAction())}><FormattedMessage {...messages.logout} /></Button>
      </div>

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
