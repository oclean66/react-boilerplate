import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { logoutAction } from '../containers/ProfilePage/actions';

const BurgerMenu = props => {
  console.log(props, 'asdasdasdasdasdasd');
  return (
    <div className="burgerModuel">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span />
          <span />
          <span />
          <ul id="menu">
            <a href="">
              <li>My Favorites</li>
            </a>
            <a href="">
              <li>Explore Entrepreneurs</li>
            </a>
            <a href="">
              <li>Entrepreneur Store</li>
            </a>
            <a href="">
              <li>My Profile</li>
            </a>
            <a href="">
              <li>My Messages</li>
            </a>
            <a href="">
              <li>My Subscriptions</li>
            </a>
            <a href="">
              <li>My Billing Methods</li>
            </a>
            <a href="">
              <li>My settings | Our Rules</li>
            </a>
            <a href="">
              <li>Support | Tutorials</li>
            </a>
            <a onClick={() => props.dispatch(logoutAction())}>
              <li>Log Out</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

BurgerMenu.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(BurgerMenu);
